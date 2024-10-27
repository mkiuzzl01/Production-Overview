import { useLayoutEffect, useState } from "react";
import Loading from "../util/Loading";

const useProductions = () => {
  const [loading, setLoading] = useState(false);
  const [productCycle, setProductCycle] = useState([]);
  const [costAnalysis, setCostAnalysis] = useState([]);
  const [quantityProduced, setQuantityProduced] = useState([]);
  const [metrics, setMetrics] = useState([]);

  //get all products data
  const getData = async () => {
    setLoading(true);
    const data = await fetch("data.json");
    const res = await data.json();
    setLoading(false);

    const cycle = res.flatMap((item) => item.productCycle);
    setProductCycle(cycle);

    const cost = res.flatMap((item) => item.costAnalysis);
    setCostAnalysis(cost);

    const quantity = res.flatMap((item) => item.quantityProduced);
    setQuantityProduced(quantity);

    const performance = res.flatMap((item) => item.metrics);
    setMetrics(performance);
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  if (loading) return <Loading></Loading>;
  
  return { productCycle, costAnalysis, quantityProduced, metrics };
};

export default useProductions;
