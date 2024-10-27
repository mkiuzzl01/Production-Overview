import { useLayoutEffect, useState } from "react";

const useProducts = () => {



  //get all products data
  const getData = async () => {
    const data = await fetch("data.json");
    const res = await data.json();
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  return {};
};

export default useProducts;
