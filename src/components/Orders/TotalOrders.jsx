import React from "react";
import useProductions from "../../lib/useProductions";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const TotalOrders = () => {
  const { orders, loading } = useProductions();

  console.log(orders);

  const RADIAN = Math.PI / 180;

  const cx = 150;
  const cy = 200;
  const iR = 50;
  const oR = 100;
  const value = 50;

  const COLORS = ["#243642", "#387478", "#629584", "#CB6040"];

  const needle = (value, data, cx, cy, iR, oR, COLORS) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={COLORS} stroke="none" />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={COLORS}
      />,
    ];
  };

  return (
    <div className="w-full h-60">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={orders}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
            nameKey="type"
          >
            {orders.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {needle(value, orders, cx, cy, iR, oR, "#d0d000")}
          <Tooltip  />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalOrders;
