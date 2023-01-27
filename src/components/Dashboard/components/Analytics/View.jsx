import styled from "styled-components";

import LineChart from "./components/LineChart";
import PieChartComp from "./components/PieChart";

function Analytics() {
  return (
    <MainWrapper>
      <LineChart />
      <PieChartComp />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Analytics;
