import React from "react";
import { Input } from "antd";
import styled from "styled-components";

function ProfileBillingDetails({ showContact }) {
  return (
    <FormWrapper>
      <RowFlex>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>First Name</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper style={{ width: "50%" }}>
          <InputHeader>First Name</InputHeader>
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
      {showContact ? (
        <RowFlex>
          <InputWrapper style={{ width: "50%" }}>
            <InputHeader>Email</InputHeader>
            <InputField />
            <InputDivider />
          </InputWrapper>
          <InputWrapper style={{ width: "50%" }}>
            <InputHeader>Phone Number</InputHeader>
            <InputField />
            <InputDivider />
          </InputWrapper>
        </RowFlex>
      ) : (
        ""
      )}
    </FormWrapper>
  );
}
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
export default ProfileBillingDetails;
