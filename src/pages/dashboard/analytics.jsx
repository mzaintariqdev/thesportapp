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

function Analytics() {
  const dataCircle = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 100 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#2ED47A", "#F7685B", "#FFB946"];
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
  const EXAMPLE_DATA = [
    {
      name: "example1",
      value: 23.4,
    },
    {
      name: "example2",
      value: 76.6,
    },
  ];
  return (
    // <ResponsiveContainer>

    <>
      <Wrapper>
        <DetailsWrapper>
          <Deals>Deals</Deals>
          <ShowWrapper>
            <ShowHeading>Show:</ShowHeading>
            <ShowCategory>Monthly</ShowCategory>
          </ShowWrapper>
        </DetailsWrapper>
        <Hr />
        <SubWrapper>
          <ClosedDealsWrapper>
            <ToolTipDot />
            <ClosedDeals>Closed deals</ClosedDeals>
          </ClosedDealsWrapper>
          <AreaChart width={420} height={222} data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0.43%" stopColor="#109CF1" stopOpacity={0.2} />
                <stop offset="99.57%" stopColor="#109CF1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              tickLine={false}
              axisLine={false}
              dataKey="name"
              style={StyledAxis}
              ticks={["Page D", "Page G"]}
            />
            <YAxis style={StyledAxis} axisLine={false} tickLine={false} />
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
        </SubWrapper>
      </Wrapper>
      <PieWrapper>
        <TasksWrapper>
          <Deals>Tasks</Deals>
          <ShowWrapper>
            <ShowHeading>Show:</ShowHeading>
            <ShowCategory>Monthly</ShowCategory>
          </ShowWrapper>
        </TasksWrapper>
        <Hr />
        <SubPieWrapper>
          <div style={{ width: "50%", height: 224 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={dataCircle}
                  innerRadius="90%"
                  outerRadius="100%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataCircle.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                  <Label style={StyledLabel} position="center">
                    60%
                  </Label>
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <TicksWrapper>
            <SubTicksWrapper>
              <Ticks borderColor="#ffb946" />
              <TickTag>Active</TickTag>
            </SubTicksWrapper>
            <SubTicksWrapper>
              <Ticks borderColor="#2ED47A" />
              <TickTag>Completed</TickTag>
            </SubTicksWrapper>
            <SubTicksWrapper>
              <Ticks borderColor="#F7685B" /> <TickTag>Ended</TickTag>
            </SubTicksWrapper>
          </TicksWrapper>
        </SubPieWrapper>
      </PieWrapper>
    </>
  );
}

const Ticks = styled.div`
  width: 8px;
  height: 8px;
  background: #ffffff;
  border: 2px solid ${(p) => p.borderColor};
  border-radius: 8px;
`;
const TickTag = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.01em;
  color: #192a3e;
  margin-left: 8px;
`;
const SubTicksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;
const TicksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;
const SubPieWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StyledLabel = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "56px",
  lineHeight: "84px",
  textAlign: "center",
  fill: "#2ed47a",
};
const ToolTipDot = styled.p`
  margin: 0;
  width: 8px;
  height: 8px;
  color: #109cf1;
  background: #109cf1;
  border-radius: 8px;
`;
const ClosedDeals = styled.p`
  margin: 0;
  margin-left: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.01em;
  color: #192a3e;
`;
const ClosedDealsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  padding-bottom: 24px;
`;
const ShowCategory = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #109cf1;
`;
const ShowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ShowHeading = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #6a707e;
`;

const TasksWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 16px 24px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 16px 16px 24px;
`;
const StyledAxis = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
  letterSpacing: "0.01em",
  color: "#4c5862",
};
const Deals = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #192a3e;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 16px;
  background: #ebeff2;
`;
const Wrapper = styled.div`
  width: 445px;
  height: 344px;
  background: white;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
const PieWrapper = styled.div`
  width: 445px;
  height: 344px;
  background: white;
  margin-top: 21px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubWrapper = styled.div`
  background: white;
`;
export default Analytics;
