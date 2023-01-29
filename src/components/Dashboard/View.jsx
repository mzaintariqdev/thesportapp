import styled from "styled-components";

import Analytics from "./components/Analytics";
import StatsHeader from "./components/StatsHeader";
import DashboardWeeklyCalender from "../components/DashboardWeeklyCalender";

function DashBoard() {
  return (
    <Wrapper>
      <StatsHeader />
      <AnalyticsWrapper>
        <DashboardWeeklyCalender />
        <Analytics />
      </AnalyticsWrapper>
    </Wrapper>
  );
}

const AnalyticsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Wrapper = styled.div`
  margin-top: 49px;
  margin-left: 47px;
  padding-right: 50px;
  width: 100%;
  min-width: 1101px;
  max-width: 1101px;
  display: flex;
  flex-direction: column;
`;
export default DashBoard;
