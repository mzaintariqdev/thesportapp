import React, { useCallback, useEffect, useRef } from "react";

import styled from "styled-components";

import "./SigninForm.css";
import { Button, Form, Input, Spin } from "antd";

import { Redirect } from "react-router";

function SignInForm(props) {
  const { isLoading, actions, isAuthenticated } = props;
  const usernameRef = useRef();

  const onFinish = useCallback(() => (data) => actions.login(data), [actions]);

  useEffect(() => usernameRef.current?.focus(), []);
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Spin spinning={isLoading}>
      <Form
        name="basic"
        onFinish={onFinish()}
        autoComplete="off"
        validateTrigger="onSubmit"
      >
        <Header>Sign In</Header>
        <Divider />

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {/* <InputForm>
        <EmailWrapper>
          <EmailHeading>Email</EmailHeading>
          <InputField placeholder="sorreluz@gmail.com" bordered={false} />
          <InputDivider />
        </EmailWrapper>
        <PasswordWrapper>
          <PasswordHeading>Password</PasswordHeading>
          <InputField
            type="password"
            placeholder="Enter Password"
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
            // onClick={() => {
            //   dispatch(username("temp"));
            // }}
          >
            Next
          </AntButton>
        </FormBottom>
      </InputForm> */}
      </Form>
    </Spin>
  );
}
const AntForm = styled(Form)`
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
