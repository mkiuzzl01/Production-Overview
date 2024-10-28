import React, { useEffect, useState } from "react";
import useProductions from "../../lib/useProductions";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const TotalOrders = () => {
  const { orders} = useProductions();
  const [center, setCenter] = useState({ cx: 0, cy: 0 });

  // console.log(orders);

  const RADIAN = Math.PI / 180;
  const iR = 50;
  const oR = 100;
  const value = 50;

  // colors in chart
  const COLORS = ["#A594F9", "#387478", "#629584", "#CB6040"];

  //use for responsive chart
  useEffect(() => {
    const handleResize = () => {
      const chartWidth = document.querySelector(".chart").offsetWidth;
      const chartHeight = document.querySelector(".chart").offsetHeight;
      setCenter({
        cx: chartWidth / 2,
        cy: chartHeight / 2,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //function for needle
  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx;
    const y0 = cy;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle
        key="needle-base"
        cx={x0}
        cy={y0}
        r={r}
        fill={color}
        stroke="none"
      />,
      <path
        key="needle-path"
        d={`M${xba},${yba} L${xbb},${ybb} L${xp},${yp} Z`}
        stroke="none"
        fill={color}
      />,
    ];
  };

  return (
    <div className="chart w-full h-[300px] py-10 lg:py-0 ">
      <h1 className="text-center text-white">Total Orders</h1>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={orders}
            cx={center.cx}
            cy={center.cy}
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
          {needle(value, orders, center.cx, center.cy, iR, oR, "#d0d000")}
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalOrders;
