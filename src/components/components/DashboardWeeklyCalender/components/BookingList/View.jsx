import React from "react";
import styled from "styled-components";
import BookingContainer from "./components/BookingContainer/View";

function BookingList() {
  return (
    <Wrapper>
      <BookingContainer status={"completed"} />
      <BookingContainer status={"unpaid"} />
      <BookingContainer status={"completed"} />
      <ShowMore>Show more</ShowMore>
    </Wrapper>
  );
}

const ShowMore = styled.p`
  margin: 0;
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #109cf1;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 24px 24px 14px 24px;
`;
export default BookingList;
