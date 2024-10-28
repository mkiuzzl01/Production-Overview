import React from "react";
import useProductions from "../../lib/useProductions";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Loading from "../../Shared/Loading";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Activities = () => {
  const { metrics, loading } = useProductions();

  if (loading) return <Loading></Loading>;

  const RADIAN = Math.PI / 180;

  // chart function for label
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-80 py-8 lg:py-0">
      <h1 className="text-center text-white">Total Activity</h1>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={metrics}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="type"
          >
            {metrics.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activities;
