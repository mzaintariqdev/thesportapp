import { Input } from "antd";
import React from "react";
import styled from "styled-components";
import ProfileAdditionalInfo from "./components/ProfileAdditionalInfo";
import ProfileBillingDetails from "../ProfileBillingDetails";

function ClientProfile() {
  return (
    <Wrapper>
      <Header>Billing Details</Header>
      <ProfileBillingDetails showContact={true} />
      <Header style={{ marginTop: "30px" }}> Additional Information</Header>
      <ProfileAdditionalInfo />
    </Wrapper>
  );
}
const Header = styled.p`
  margin: 0;
  font-family: "Poppins";
  margin-bottom: 16px;
  opacity: 0.5;
  font-weight: 500;
  font-size: 13px;
  color: #334d6e;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
`;
export default ClientProfile;
