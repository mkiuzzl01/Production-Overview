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
import Loading from "../../util/Loading";

const CostAnalysis = () => {
  const { costAnalysis, loading } = useProductions();

  if (loading) return <Loading></Loading>;

  return (
    <div className="w-full  h-[257px] shadow-lg shadow-[#3A6D8C] rounded-md p-2 mb-2">
      <ResponsiveContainer>
        <AreaChart data={costAnalysis?.items} margin={{}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#ffff" />
          <YAxis stroke="#ffff" />
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
