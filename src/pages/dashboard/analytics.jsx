import styled from "styled-components";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";

function DashBoard() {
  const dataCircle = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 100 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const data = [
    {
      name: "Page A",
      data: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      data: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      data: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      data: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      data: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      data: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      data: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    // <ResponsiveContainer>

    <>
      {/* <Wrapper>
        <AreaChart
          width={393}
          height={222}
          data={data}
          margin={{ top: 24, right: 24, left: 24, bottom: 24 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0.43%" stopColor="#109CF1" stopOpacity={0.2} />
              <stop offset="99.57%" stopColor="#109CF1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis tickLine={false} axisLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="data"
            stroke="#109CF1"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </Wrapper> */}
      <PieChart width={800} height={400}>
        <Pie
          style={{ width: "224px", height: "224px" }}
          data={dataCircle}
          // cx={120}
          // cy={200}
          innerRadius={60}
          outerRadius={70}
          width={224}
          height={224}
          fill="#8884d8"
          // paddingAngle={5}
          dataKey="value"
        >
          {dataCircle.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label width={30} position="center">
            30
          </Label>
        </Pie>
      </PieChart>
    </>
    // </ResponsiveContainer>
  );
}
const Wrapper = styled.div`
  width: 445px;
  height: 344px;
  background: white;
`;
export default DashBoard;
