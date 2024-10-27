import React from "react";
import ProductCycle from "../productCycle/productCycle";
import CostAnalysis from "../CostAnalysis/CostAnalysis";

const Production_Overview = () => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-center">All Overview of the Production</h1>
      </div>
      <div>
        <CostAnalysis></CostAnalysis>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <ProductCycle></ProductCycle>
      </div>
      <div></div>
    </div>
  );
};

export default Production_Overview;
