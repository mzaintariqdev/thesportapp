import React from "react";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import { ReactComponent as MoreIcon } from "../../../assets/icons/more.svg";
function Schedule({ borderColor }) {
  return (
    <Wrapper borderColor={borderColor}>
      <SubWrapper style={{ marginLeft: "22px" }}>
        <Header>Resource</Header>
        <Value>Tennis Court</Value>
      </SubWrapper>
      <SubWrapper style={{ marginLeft: "14px" }}>
        <Header>Date</Header>
        <Value>22 March 10:00 - 11:00</Value>
      </SubWrapper>
      <SubWrapper style={{ marginLeft: "23px" }}>
        <Header>Amount</Header>
        <Value>420 AED</Value>
      </SubWrapper>
      <Options style={{ marginRight: "11px", justifyContent: "right" }}>
        <EditIcon style={{ marginTop: "5px", cursor: "pointer" }} />
        <MoreIcon style={{ cursor: "pointer" }} />
      </Options>
    </Wrapper>
  );
}
const Options = styled.div`
  display: flex;
  margin-top: 9px;
  flex-direction: row;
`;
const SubWrapper = styled.div`
  display: flex;
  margin-top: 9px;
  flex-direction: column;
  justify-content: left;
`;
const Header = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 11px;
  color: #818e9b;
`;
const Value = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 18px;
  color: #192a3e;
`;
const Wrapper = styled.div`
  margin-bottom: 23px;
  padding-top: 9px;
  padding-bottom: 15px;
  width: 589px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-left: 2px solid ${(p) => p.borderColor};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
`;
export default Schedule;
