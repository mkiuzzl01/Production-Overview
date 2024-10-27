import React from "react";
import ProductCycle from "../productCycle/productCycle";
import CostAnalysis from "../CostAnalysis/CostAnalysis";
import Quantity from "../quantity/Quantity";

const Production_Overview = () => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-center">All Overview of the Production</h1>
      </div>
      <div>
        <CostAnalysis></CostAnalysis>
      </div>
      <div className="grid grid-cols-4">
        <div>
          <ProductCycle></ProductCycle>
        </div>
        <div className="col-span-2">

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
