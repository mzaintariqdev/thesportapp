import React from "react";
import styled from "styled-components";
import Schedule from "./schedule";

function ScheduleList() {
  return (
    <Wrapper>
      <Schedule borderColor={"#00ac4f"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
      <Schedule borderColor={"#DA001A"} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  max-height: 780px;
  overflow: auto;
`;
export default ScheduleList;
