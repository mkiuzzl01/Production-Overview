import { useLayoutEffect, useState } from "react";

const useProducts = () => {
  const [metrics, setMetrics] = useState([]);
  const [productionLines, setProductionLines] = useState([]);
  const [orders, setOrders] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  //get all products data
  const getData = async () => {
    const data = await fetch("data.json");
    const res = await data.json();

    //total metrics items
    const metricsItems = res.flatMap((item) => item.metrics);
    setMetrics(metricsItems);

    //total line items
    const line = res.flatMap((item) => item.productionLines);
    setProductionLines(line);

    //total ordered items
    const orderItems = res.flatMap((item) => item.orders);
    setOrders(orderItems);

    //recent activities
    const recent = res.flatMap((item) => item.recentActivities);
    setRecentActivities(recent);
  };


  useLayoutEffect(() => {
    getData();
  },[]);

  return [metrics, productionLines, orders, recentActivities];
};

export default useProducts;
