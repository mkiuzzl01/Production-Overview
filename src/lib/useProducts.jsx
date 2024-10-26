import { useLayoutEffect, useState } from "react";

const useProducts = () => {
  const [metrics, setMetrics] = useState({});
  const [productionLines, setProductionLines] = useState([]);
  const [orders, setOrders] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  //get all products data
  const getData = async () => {
    const data = await fetch("data.json");
    const res = await data.json();

    //total metrics items
    const metricsItems = res.map((item) => item.metrics);
    setMetrics(...metricsItems);

    //total line items
    const line = res.map((item) => item.productionLines);
    setProductionLines(line);

    //total ordered items
    const orderItems = res.map((item) => item.orders);
    setOrders(orderItems);

    //recent activities
    const recent = res.map((item) => item.recentActivities);
    setRecentActivities(recent);
  };


  useLayoutEffect(() => {
    getData();
  },[]);

  return [metrics, productionLines, orders, recentActivities];
};

export default useProducts;
