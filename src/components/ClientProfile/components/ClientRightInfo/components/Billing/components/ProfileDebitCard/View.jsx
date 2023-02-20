import React from 'react';
import { Form, Input, Select } from 'antd';

import { ReactComponent as DownArrow } from '../../../../../../../../assets/icons/arrow-down.svg';

import './ProfileDebitCard.scss';

function ProfileDebitCard() {
  const { Option } = Select;
  return (
    <Form
      name="basic"
      autoComplete="off"
      validateTrigger="onSubmit"
      className="profile-debit-card"
    >
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields"
          label="Account Type"
          name="accountType"
        >
          <Select
            showSearch
            suffixIcon={<DownArrow />}
            bordered={false}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="row-flex__input-fields"
          label="Bank Name"
          name="bankName"
        >
          <Input />
        </Form.Item>
      </div>
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields"
          label="Routining Number"
          name="routiningNumber"
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="row-flex__input-fields"
          label="Account Number"
          name="accountNumber"
        >
          <Input />
        </Form.Item>
      </div>
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields"
          label="Account Holder"
          name="accountHolder"
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="row-flex__input-fields"
          label="Organization"
          name="organization"
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
    </Form>
  );
}

export default ProfileDebitCard;
