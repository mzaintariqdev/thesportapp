import { Input, Select } from "antd";

import React from "react";
import styled from "styled-components";
import { ReactComponent as DownArrow } from "../../../assets/icons/arrow-down.svg";
function ProfileDebitCard() {
  const { Option } = Select;
  return (
    <FormWrapper>
      <RowFlex>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>Account Type</InputHeader>
          <AntSelect
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
          </AntSelect>
          <InputDivider />
        </InputWrapper>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>Bank Name</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
      </RowFlex>
      <RowFlex>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>Routining Number</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>Account Number</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
      </RowFlex>
      <RowFlex>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>Account Holder</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>Organization</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
      </RowFlex>
      <RowFlex>
        <InputWrapper style={{ width: "100%" }}>
          <InputHeader>Street Address</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
      </RowFlex>

      <RowFlex>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>City</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>Country</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
      </RowFlex>
    </FormWrapper>
  );
}
const AntSelect = styled(Select)`
  width: 100%;
  margin-top: 8px;
  cursor: pointer;
`;
const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 530px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 5px;
  margin-left: 29px;
`;
const InputHeader = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 11px;
  color: #818e9b;
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
  width: 100%;
`;
const InputDivider = styled.p`
  height: 1px;
  width: 100%;
  background: #d3d8dd;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
export default ProfileDebitCard;
