import React from "react";
import ProductCycle from "../components/Production_Management/ProductCycle";
import CostAnalysis from "../components/Production_Management/CostAnalysis";
import Quantity from "../components/Production_Management/Quantity";
import Activities from "../components/Production_Management/Activities";
import TotalOrders from "../components/Production_Management/TotalOrders";

const Production_Overview = () => {
  return (
    <div className="p-5 bg-[#001F3F]">

      {/* total CostAnalysis component   */}
      <div>
        <CostAnalysis></CostAnalysis>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-4">

        {/* product cycle analysis component */}
        <div>
          <ProductCycle></ProductCycle>
        </div>
        <div className="md:flex justify-between items-center col-span-2">
          {/* total order related Overview */}
          <div className="md:w-1/2">
            <TotalOrders></TotalOrders>
          </div>
          <div className="md:w-1/2">
            {/* for current activities */}
            <Activities></Activities>
          </div>
        </div>
        {/* for total available quantity */}
        <div>
          <Quantity></Quantity>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Production_Overview;
