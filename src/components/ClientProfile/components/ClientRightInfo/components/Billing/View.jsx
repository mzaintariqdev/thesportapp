import styled from "styled-components";

import ProfileDebitCard from "./components/ProfileDebitCard";
import ProfileBillingDetails from "../ProfileBillingDetails";

function Billing() {
  return (
    <Wrapper>
      <Header>Billing Details</Header>
      <ProfileBillingDetails showContact={false} />
      <Header>Direct Debit Account</Header>
      <ProfileDebitCard />
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
export default Billing;
