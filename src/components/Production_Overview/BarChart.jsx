import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";
import useProducts from "../../lib/useProducts";

const BarChart = () => {
  const { productionLines } = useProducts();

  return (
    <div className="border-2 rounded-lg w-full m-5 p-5">
      <h1 className="">Production Line Status Overview</h1>
      <ComposedChart
        width={500}
        height={310}
        data={productionLines}
        margin={{}}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="status"
          label={{ position: "insideBottomRight", offset: 0 }}
          scale="auto"
        />
        <YAxis
          label={{ value: "Progress", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="currentOrder"
          fill="#8884d8"
          stroke="#488"
        />
        <Bar dataKey="completionPercentage" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="completionPercentage" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default BarChart;
