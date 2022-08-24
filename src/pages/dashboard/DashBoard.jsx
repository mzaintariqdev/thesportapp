import styled from "styled-components";
import DashboardWeeklyCalender from "../../components/dashboardWeeklyCalender/dashboardWeeklyCalender";
import Analytics from "./analytics";
import TopAnalytics from "./topAnalytics";

function DashBoard() {
  return (
    <Wrapper>
      <TopAnalytics />
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
