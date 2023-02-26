import React from 'react';
import { Input, Select, Form } from 'antd';

import { ReactComponent as DownArrow } from '../../../../../../../../assets/icons/arrow-down.svg';

import './ProfileAdditionalInfo.scss';

function ProfileAdditionalInfo() {
  const { Option } = Select;

  return (
    <Form
      name="basic"
      autoComplete="off"
      validateTrigger="onSubmit"
      className="profile-additional-info"
    >
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields"
          label="Referral Company"
          name="referralCompany"
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
          label="Referral Source"
          name="referralSource"
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
      </div>
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields"
          label="T-Shirt Size"
          name="tShirtSize"
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
          label="Trainer"
          name="trainer"
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
          label="SalesPerson"
          name="salesPerson"
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
      </div>
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields"
          label="RelationShips"
          name="relationShips"
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
          label="Discount"
          name="discount"
        >
          <Input />
        </Form.Item>
      </div>
      <div className="row-flex">
        <Form.Item
          className="row-flex__input-fields-full"
          label="Medical Conditions"
          name="medicalConditions"
        >
          <Input />
        </Form.Item>
      </div>
    </Form>
  );
}

export default ProfileAdditionalInfo;
