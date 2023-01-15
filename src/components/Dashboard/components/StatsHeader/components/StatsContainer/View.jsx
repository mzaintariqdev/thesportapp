import styled from "styled-components";

import { ReactComponent as ArrowUp } from "../../../../../../assets/icons/arrow-up-green.svg";

function StatsContainer({ StatIcon, heading, balance, percentage }) {
  return (
    <Wrapper>
      {StatIcon}
      <RightSide>
        <Heading>{heading}</Heading>
        <Balance>{balance}</Balance>
        <ProgressWrapper>
          <ArrowUp />
          <Percentage>{percentage}</Percentage>
          <ThisMonth>this month</ThisMonth>
        </ProgressWrapper>
      </RightSide>
    </Wrapper>
  );
}

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Percentage = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.01em;
  color: #00ac4f;
`;
const ThisMonth = styled.p`
  margin: 0;
  margin-left: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.01em;
  color: #292d32;
`;
const Heading = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #acacac;
`;
const Balance = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: -0.01em;
  color: #333333;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 46px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 234px;
  height: 83px;
`;

export default StatsContainer;
