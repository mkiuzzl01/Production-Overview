import { useLayoutEffect, useState } from "react";

const useProductions = () => {
  const [productCycle, setProductCycle] = useState([]);
  const [costAnalysis, setCostAnalysis] = useState([]);
  const [quantityProduced, setQuantityProduced] = useState([]);
  const [metrics, setMetrics] = useState([]);

  //get all products data
  const getData = async () => {
    const data = await fetch("data.json");
    const res = await data.json();

    const cycle = res.flatMap((item) => item.productCycle);
    setProductCycle(cycle);

    const cost = res.flatMap((item) => item.costAnalysis);
    setCostAnalysis(cycle);

    const quantity = res.flatMap((item) => item.quantityProduced);
    setQuantityProduced(cycle);

    const performance = res.flatMap((item) => item.metrics);
    setMetrics(cycle);
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  return { productCycle, costAnalysis, quantityProduced, metrics };
};

export default useProductions;
