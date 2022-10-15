import React from "react";
import styled from "styled-components";
import SampleImage from "../../assets/icons/sample-image.svg";

function BookingContainer({ status = "completed" }) {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading>Send benefit review by Sunday</Heading>
        <Tag>300 USD</Tag>
      </HeadingWrapper>
      <DueDateWrap>
        <DueDate>Time</DueDate>
        <DateContent>08:00 AM</DateContent>
      </DueDateWrap>
      <StatusWrap>
        <ImageWrap>
          <ClientImage src={SampleImage} alt="client" />
          <Name>Rebecca Moore</Name>
        </ImageWrap>
        <Status status={status}>
          {status === "unpaid" ? "unpaid" : "Completed"}
        </Status>
      </StatusWrap>
    </Wrapper>
  );
}

const ClientImage = styled.img`
  width: 24px;
  height: 24px;
`;
const Name = styled.p`
  margin: 0;
  margin-left: 12px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #707683;
`;
const Status = styled.div`
  width: 84px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  background: ${(p) => (p.status === "unpaid" ? "#F7685B" : "#2ed47a")};
  border-radius: 4px;
`;
const StatusWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ImageWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DateContent = styled.p`
  margin: 0;
  margin-left: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #4c5862;
`;
const DueDateWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
const DueDate = styled.p`
  margin: 0;
  width: 64px;
  margin-right: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #4c5862;
  opacity: 0.5;
`;
const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;
const Tag = styled.p`
  marin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.01em;
  color: #90a0b7;
`;
const Heading = styled.p`
  margin: 0;
  max-width: 400px;
  overflow-wrap: break-word;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #323c47;
`;
const Wrapper = styled.div`
  min-height: 126px;
  padding: 16px;
  width: 588px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  margin-bottom: 24px;
`;

export default BookingContainer;
