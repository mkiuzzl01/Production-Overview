import React from "react";
import useProductions from "../../lib/useProductions";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loading from "../../Shared/Loading";

const CostAnalysis = () => {
  const { costAnalysis, loading } = useProductions();

  
  if (loading) return <Loading></Loading>;

  // console.log(costAnalysis);

  return (
    <div className="w-full  h-[297px] shadow-md shadow-[#3A6D8C] rounded-md pb-8 px-2">
      <h1 className="text-center text-white">All Overview of the Production Cost</h1>
      <ResponsiveContainer>
        <AreaChart
          data={costAnalysis?.items}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#ffff" tick={{ fill: "#ffff" }} />
          <YAxis stroke="#ffff" tick={{ fill: "#ffff" }} />
          <Tooltip />
          <Legend align="center" />
          <Area
            type="monotone"
            dataKey="laborCost"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="productionCost"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="manufacturingCost"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostAnalysis;
