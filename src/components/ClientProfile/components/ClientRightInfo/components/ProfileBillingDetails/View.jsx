import React from 'react';
import { Form, Input } from 'antd';

import RenderIf from '../../../../../components/RenderIf';

import './ProfileBillingDetails.scss';

function ProfileBillingDetails({ showContact }) {
  return (
    <Form
      name="basic"
      autoComplete="off"
      validateTrigger="onSubmit"
      className="profile-billing-details"
    >
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields"
          label="First Name"
          name="firstName"
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="row-flex__input-fields"
          label="Last Name"
          name="lastName"
        >
          <Input />
        </Form.Item>
      </div>
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields-full"
          label="Street Address"
          name="streetAddress"
        >
          <Input />
        </Form.Item>
      </div>
      <div className="row-flex">
        <Form.Item className="row-flex__input-fields" label="City" name="city">
          <Input />
        </Form.Item>
        <Form.Item
          className="row-flex__input-fields"
          label="Country"
          name="country"
        >
          <Input />
        </Form.Item>
      </div>
      <RenderIf condition={showContact}>
        <div className="row-flex">
          <Form.Item
            className="row-flex__input-fields"
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="row-flex__input-fields"
            label="Phone Number"
            name="phoneNumber"
          >
            <Input />
          </Form.Item>
        </div>
      </RenderIf>
    </Form>
  );
}

export default ProfileBillingDetails;
