import React from "react";
import ProductCycle from "../productCycle/productCycle";

const Production_Overview = () => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-center">All Overview of the Production</h1>
      </div>
      <div>
        <ProductCycle></ProductCycle>
      </div>
    </div>
  );
};

export default Production_Overview;
