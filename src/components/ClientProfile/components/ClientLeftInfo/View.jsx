import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, DatePicker, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';

import { ReactComponent as BackArrowIcon } from '../../../../assets/icons/back-arrow.svg';
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg';

import './ClientLeftInfo.scss';

function ClientLeftInfo() {
  const history = useHistory();
  return (
    <div className="client-left-info__wrapper">
      <div
        className="client-left-info__wrapper-upper-part"
        onClick={() => {
          history.push('/clients');
        }}
      >
        <BackArrowIcon />
        <p className="back-to-client">Back to Clients</p>
      </div>

      <Form
        name="basic"
        autoComplete="off"
        validateTrigger="onSubmit"
        className="client-left-info__wrapper-form-part"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >
          <EditIcon
            style={{
              marginTop: '10px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div className="avatar-wrapper">
          <Avatar className="user-avatar" size={100} icon={<UserOutlined />} />
          <p className="user-name">Jane Doe</p>
        </div>
        <Form.Item
          className="client-left-info__wrapper-form-part__input-fields"
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your firstName!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="client-left-info__wrapper-form-part__input-fields"
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your lastName!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="client-left-info__wrapper-form-part__input-fields"
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="client-left-info__wrapper-form-part__input-fields"
          label="Company"
          name="company"
          rules={[
            {
              required: true,
              message: 'Please input your company!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="client-left-info__wrapper-form-part__input-fields"
          label="Mobile"
          name="mobile"
          rules={[
            {
              required: true,
              message: 'Please input your mobile!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="client-left-info__wrapper-form-part__input-fields"
          label="Emergency Contact"
          name="emergencyContact"
          rules={[
            {
              required: true,
              message: 'Please input your emergencyContact!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="client-left-info__wrapper-form-part__input-fields"
          label="Last Session"
          name="lastSession"
          rules={[
            {
              required: true,
              message: 'Please input your lastSession!',
            },
          ]}
        >
          <DatePicker format={'ll'} />
        </Form.Item>
        <Form.Item
          className="client-left-info__wrapper-form-part__input-fields"
          label="Birthday"
          name="birthday"
          rules={[
            {
              required: true,
              message: 'Please input your birthday!',
            },
          ]}
        >
          <DatePicker format={'ll'} />
        </Form.Item>
      </Form>
    </div>
  );
}

export default ClientLeftInfo;
