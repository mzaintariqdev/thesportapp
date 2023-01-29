import React from "react";
import styled from "styled-components";

import ClientRightInfo from "./components/ClientRightInfo";
import ClientLeftInfo from "./components/ClientLeftInfo";

function ClientProfile() {
  return (
    <Flex>
      <ClientLeftInfo />
      <ClientRightInfo />
    </Flex>
  );
}
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  height: auto;
  min-height:800px
  background-color: "#F5F6F8";
`;
export default ClientProfile;
