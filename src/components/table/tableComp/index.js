import React from "react";
import styled from "styled-components";

function Table() {
  return (
    <Wrapper>
      <TableHeader></TableHeader>
    </Wrapper>
  );
}
const HeaderItem = styled.div``;
const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  height: auto;
  background: white;
  position: absolute;
  margin-top: 48px;
`;
export default Table;
