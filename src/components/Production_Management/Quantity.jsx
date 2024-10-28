import React from "react";
import useProductions from "../../lib/useProductions";
import { FaArrowTrendDown } from "react-icons/fa6";

const Quantity = () => {
  const { quantity } = useProductions();

  // console.log(quantity);
  return (
    <div className="flex flex-col lg:flex-col md:flex-row justify-center items-center gap-3 mt-5">
      {/* total quantity of production card */}
      {quantity?.map((item, idx) => (
        <div className="bg-[#6A9AB0] text-center p-5 rounded-lg" key={idx}>
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2"> <FaArrowTrendDown className="text-orange-700"></FaArrowTrendDown>{item?.percentageChange} %</h1>
          <h3>{item?.type}</h3>
          <div className="flex gap-4 p-4">
          <div>
            <p className="font-bold">{item?.currentMonth}</p>
            <p>Current Month</p>
          </div>
          <div className="border-2"></div>
          <div>
            <p className="font-bold">{item.lastMonth}</p>
            <p>Last Month</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quantity;
