import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Form, Input, Spin } from 'antd';
import { Redirect } from 'react-router';

import './LogInForm.scss';

function LogInForm(props) {
  const { isLoading, actions, isAuthenticated } = props;
  const usernameRef = useRef();

  const onFinish = useCallback(() => (data) => actions.login(data), [actions]);

  useEffect(() => usernameRef.current?.focus(), []);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Spin spinning={isLoading}>
      <Form
        className="login-form"
        name="basic"
        onFinish={onFinish()}
        autoComplete="off"
        validateTrigger="onSubmit"
      >
        <p className="login-form__title">Sign In</p>
        <Divider />
        <div className="login-form__container">
          <Form.Item
            className="login-form__container-input-fields"
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="login-form__container-input-fields"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <div className="login-form__container-actions">
            <Form.Item>
              <Button
                className="login-form__container-actions__forget-btn"
                type="text"
              >
                Forgot Password?
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                className="login-form__container-actions__next-btn"
                htmlType="submit"
              >
                Next
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Spin>
  );
}

const Divider = styled.p`
  margin-top: 22px;
  margin-bottom: 8px;
  border: 1px solid ${(p) => p.theme.colors.assetGray};
`;

export default LogInForm;
