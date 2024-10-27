import { useLayoutEffect, useState } from "react";

const useProductions = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [productCycle, setProductCycle] = useState([]);
  const [costAnalysis, setCostAnalysis] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [reworkQuantity, setReworkQuantity] = useState({});
  const [metrics, setMetrics] = useState([]);

  //get all products data
  const getData = async () => {
    try {
      const response = await fetch("data.json");
      if (!response.ok) throw Error("Field to fetch data");
      const [data] = await response.json();

      //extract to production data from the JSON file;
      setProductCycle(data.productCycle || []);
      setCostAnalysis(data.costAnalysis || []);
      setQuantity(data.quantity || {});
      setMetrics(data.metrics || {});
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  return {
    productCycle,
    costAnalysis,
    quantity,
    metrics,
    loading,
    error,
  };
};

export default useProductions;
