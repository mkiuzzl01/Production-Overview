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

const CostAnalysis = () => {
  const { costAnalysis } = useProductions();
  
  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <AreaChart
          data={costAnalysis?.items}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend align="center"  />
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
