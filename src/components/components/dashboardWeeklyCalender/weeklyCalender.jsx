import React, { useState } from "react";
import styled from "styled-components";

const Days = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
const currentDate = new Date();

function WeeklyCalender() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const weeklyDates = Array.from(Array(7).keys()).map((idx) => {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay() + idx);
    return d;
  });
  console.log(
    Array.from(Array(7).keys()).map((idx) => {
      const d = new Date();
      d.setDate(d.getDate() - d.getDay() + idx);
      return d;
    })
  );
  return (
    <Wrapper>
      {weeklyDates.map((date, index) => (
        <DayWrapper key={index}>
          <Day
            currentDate={date.getDay() === currentDate.getDay() ? true : false}
          >
            {Days[date.getDay()]}
          </Day>
          {selectedDate.getDate() === date.getDate() ? (
            <SelectedDate
              currentDate={
                date.getDay() === currentDate.getDay() ? true : false
              }
            >
              {date.getDate()}
            </SelectedDate>
          ) : (
            <DateContent
              onClick={() => {
                setSelectedDate(date);
              }}
              currentDate={
                date.getDay() === currentDate.getDay() ? true : false
              }
            >
              {date.getDate()}
            </DateContent>
          )}
        </DayWrapper>
      ))}
    </Wrapper>
  );
}

const SelectedDate = styled.p`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 24px;
  height: 24px;
  background: #109cf1;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.01em;
  cursor: pointer;
  color: #ffffff;
`;
const DateContent = styled.p`
  margin: 0;
  cursor: pointer;
  font-family: "Poppins";
  border-radius: 25px;
  width: 24px;
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${(p) => (p.currentDate === true ? "#109CF1" : "#4c5862")};
`;
const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Day = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${(p) => (p.currentDate === true ? "#109CF1" : "#334d6e")};
  opacity: ${(p) => (p.currentDate === true ? "1" : "0.5")}; ;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export default WeeklyCalender;
