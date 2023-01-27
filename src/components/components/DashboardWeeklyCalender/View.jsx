import React from "react";
import styled from "styled-components";
import BookingList from "./components/BookingList";
import WeeklyCalender from "./components/WeeklyCalendar";

function DashboardWeeklyCalender() {
  return (
    <Wrapper>
      <UpperWrapper>
        <Heading>Unpaid Bookings</Heading>
        <Bar />
        <SelectedDate>23 December, Sunday</SelectedDate>
        <WeeklyCalender />
      </UpperWrapper>
      <Divider />
      <BookingList />
    </Wrapper>
  );
}

const UpperWrapper = styled.div`
  padding: 16px 24px;
  margin-bottom: 8px;
`;
const SelectedDate = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #192a3e;
  margin-bottom: 47px;
`;
const Bar = styled.div`
  width: 588px;
  height: 4px;
  margin-top: 16px;
  margin-bottom: 20px;
  background: #ebeff2;
  border-radius: 3px;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 24px;
  background: #ebeff2;
`;
const Heading = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #334d6e;
`;
const Wrapper = styled.div`
  min-width: 636px;
  min-height: 718px;
  background: white;
  margin-top: 10px;
  margin-right: 21px;
  margin-bottom: 30px;
`;

export default DashboardWeeklyCalender;
