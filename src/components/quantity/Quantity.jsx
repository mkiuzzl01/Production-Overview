import React from "react";
import useProductions from "../../lib/useProductions";
import { FaArrowTrendDown } from "react-icons/fa6";

const Quantity = () => {
  const { quantity } = useProductions();

  // console.log(quantity);
  return (
    <div className="flex flex-col gap-3">
      {quantity?.map((item, idx) => (
        <div className="bg-gray-400 text-center p-5" key={idx}>
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2"> <FaArrowTrendDown className="text-red-700"></FaArrowTrendDown>{item?.percentageChange} %</h1>
          <h3>{item?.type}</h3>
          <div className="flex gap-4 p-4">
          <div>
            <p>{item?.currentMonth}</p>
            <p>Current Month</p>
          </div>
          <div className="border-2"></div>
          <div>
            <p>{item.lastMonth}</p>
            <p>Last Month</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quantity;
