import React from "react";
import styled from "styled-components";
import VenueLogo from "../../assets/img/Rectangle.svg";
import BannerImage from "../../assets/img/image 5.svg";
import SignInForm from "../../components/forms/SignInForm/SignInForm";
import "./SignIn.css";

function SignIn() {
  return (
    <MainWrapper>
      <Banner url={BannerImage} className="banner">
        <BannerLeft>
          <img className="venueLogo" src={VenueLogo} alt="VenueLogo" />
        </BannerLeft>

        <BannerRight>
          <CompanyName>Padel Academy</CompanyName>
          <Address>JBR, Dubai, United Arab Emirates</Address>
        </BannerRight>
      </Banner>
      <div className="SignInForm">
        <SignInForm />
      </div>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  width: calc(100% - 80px);
  line-height: 35px;
`;
const Banner = styled.div`
  width: calc(100% - 80px);
  margin-top: 32px;
  height: 167px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BannerLeft = styled.div`
  margin-right: 90px;
  line-height: 0;
`;
const BannerRight = styled.div`
  font-family: ${(p) => p.theme.font.family};
  color: ${(p) => p.theme.colors.assetWhite};
`;
const CompanyName = styled.p`
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 32px;
`;
const Address = styled.p`
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 24px;
`;
export default SignIn;
