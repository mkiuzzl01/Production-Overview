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
  const [, productionLines] = useProducts();

  return (
    <div className="pt-10">
        <h1 className="">Production Line Status Overview</h1>
      <ComposedChart
        width={500}
        height={400}
        data={productionLines}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
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
        <Legend  />
        <Area
          type="monotone"
          dataKey="currentOrder"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="completionPercentage" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="completionPercentage" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default BarChart;
