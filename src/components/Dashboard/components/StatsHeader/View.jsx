import styled from "styled-components";

import { ReactComponent as TopAnalyticsOne } from "../../../../assets/icons/top-analytics-one.svg";
import { ReactComponent as TopAnalyticsTwo } from "../../../../assets/icons/top-analytics-two.svg";
import { ReactComponent as TopAnalyticsThree } from "../../../../assets/icons/top-analytics-three.svg";
import StatsContainer from "./components/StatsContainer";

function StatsHeader() {
  return (
    <Wrapper>
      <StatsContainer
        StatIcon={<TopAnalyticsOne />}
        heading={"Earning"}
        balance="$198k"
        percentage={"3%"}
      />
      <Divider />
      <StatsContainer
        StatIcon={<TopAnalyticsTwo />}
        heading="Balance"
        balance="$2.4k"
        percentage={"3%"}
      />
      <Divider />
      <StatsContainer
        StatIcon={<TopAnalyticsThree />}
        heading="Total Sales"
        balance="$89k"
        percentage={"3%"}
      />
    </Wrapper>
  );
}

const Divider = styled.div`
  width: 87px;
  height: 0px;
  border: 1px solid #f0f0f0;
  transform: rotate(90deg);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1101px;
  min-width: 1101px;
  min-height: 102px;
  background: white;
`;
export default StatsHeader;
