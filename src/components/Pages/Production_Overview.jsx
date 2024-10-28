import React from "react";
import ProductCycle from "../productCycle/productCycle";
import CostAnalysis from "../CostAnalysis/CostAnalysis";
import Quantity from "../quantity/Quantity";
import Activities from "../Activities/Activities";
import TotalOrders from "../Orders/TotalOrders";

const Production_Overview = () => {
  return (
    <div className="p-5 bg-[#001F3F]">
      <div className="">
        <h1 className="text-center text-white">All Overview of the Production</h1>
      </div>
      <div>
        <CostAnalysis></CostAnalysis>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <ProductCycle></ProductCycle>
        </div>
        <div className="col-span-2">
          <TotalOrders></TotalOrders>
          <Activities></Activities>
        </div>
        <div>
          <Quantity></Quantity>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Production_Overview;
