import React from "react";
import PiChart from "./PiChart";
import BarChart from "./BarChart";

const Production_Overview = () => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-center">All Progressing Overview of the product</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <PiChart></PiChart>
        <BarChart></BarChart>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Production_Overview;
