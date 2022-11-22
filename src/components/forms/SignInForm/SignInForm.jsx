import React from "react";
import AntButton from "../../ant/Button";
import styled from "styled-components";

import "./SigninForm.css";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { username } from "../../../redux/reduxSlice/authSlice";

function SignInForm() {
  const dispatch = useDispatch();

  return (
    <Form>
      <Header>Sign In</Header>
      <Divider />

      <InputForm>
        <EmailWrapper>
          <EmailHeading>Email</EmailHeading>
          <InputField placeholder="sorreluz@gmail.com" bordered={false} />
          <InputDivider />
        </EmailWrapper>
        <PasswordWrapper>
          <PasswordHeading>Password</PasswordHeading>
          <InputField
            type="password"
            placeHolder="Enter Password"
            bordered={false}
          />
          <InputDivider />
        </PasswordWrapper>
        <FormBottom>
          <AntButton
            style={{
              width: "160px",
              height: "20px",
              fontSize: " 13px",
              borderRadius: "5px",
            }}
            type="secondary"
          >
            Forgot Password?
          </AntButton>
          <AntButton
            style={{ height: "42px", borderRadius: "5px" }}
            type="primary"
            onClick={() => {
              dispatch(username("temp"));
            }}
          >
            Next
          </AntButton>
        </FormBottom>
      </InputForm>
    </Form>
  );
}
const Form = styled.div`
  font-family: ${(p) => p.theme.font.family};
  min-height: 307px;
  min-width: 400px;
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;
const Header = styled.p`
  font-weight: ${(p) => p.theme.font.weight.medium};
  color: ${(p) => p.theme.colors.assetBlack};
  font-weight: 500;
  font-size: 18px;
  margin-left: 31px;
  margin-top: 18px;
`;
const Divider = styled.p`
  margin-top: 22px;
  margin-bottom: 8px;
  border: 1px solid ${(p) => p.theme.colors.assetGray};
`;
const InputForm = styled.div`
  width: 348px;
  height: 173px;
  display: flex;
  flex-direction: column;
  margin-left: 29px;
`;
const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
`;
const EmailHeading = styled.p`
  font-weight: ${(p) => p.theme.font.weight.medium};
  color: ${(p) => p.theme.colors.assetBlue};
  font-size: 11px;
`;
const InputField = styled(Input)`
  font-weight: ${(p) => p.theme.font.weight.regular};
  font-size: 13px;
  border: 0;
  color: ${(p) => p.theme.colors.assetBlack};
  &:active,
  &:focus {
    outline: none;
  }
  margin-bottom: 7px;
`;
const InputDivider = styled.p`
  height: 1px;
  width: 100%;
  background: ${(p) => p.theme.colors.assetHelpTextGray};
`;
const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
`;
const PasswordHeading = styled.p`
  font-weight: ${(p) => p.theme.font.weight.medium};
  color: ${(p) => p.theme.colors.assetBlue};
  font-size: 11px;
`;
const FormBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export default SignInForm;
