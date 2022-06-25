import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { ReactComponent as BackArrowIcon } from "../../../assets/icons/back-arrow.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import AntAvatar from "../../../components/ant/Avatar";
import AntDivider from "../../../components/ant/Divider";
import { Input } from "antd";
function ClientLeftInfo() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <UpperPart
        onClick={() => {
          navigate("/clients");
        }}
      >
        <BackArrowIcon />
        <BackToClients>Back to Clients</BackToClients>
      </UpperPart>

      <LowerPart>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <EditIcon
            style={{
              marginTop: "10px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          />
        </div>
        <AvatarWrapper>
          <AntAvatar
            size={100}
            style={{ borderRadius: "50px" }}
            icon={<UserOutlined />}
          />
          <ClientName>Jane Doe</ClientName>
        </AvatarWrapper>
        <AntDivider />
        <InputWrapper>
          <InputHeader>First Name</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper>
          <InputHeader>Last Name</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper>
          <InputHeader>Email</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper>
          <InputHeader>Company</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper>
          <InputHeader>Mobile</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper>
          <InputHeader>Emergency Contact</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper>
          <InputHeader>Last Session</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
        <InputWrapper style={{ marginBottom: "30px" }}>
          <InputHeader>Birthday</InputHeader>
          <InputField />
          <InputDivider />
        </InputWrapper>
      </LowerPart>
    </Wrapper>
  );
}
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
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
  width: 302px;
`;
const InputDivider = styled.p`
  height: 1px;
  width: 302px;
  background: #d3d8dd;
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
const ClientName = styled.p`
  font-family: "Poppins";
  margin-top: 16px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #192a3e;
`;
const UpperPart = styled.div`
  margin-bottom: 22px;
  display: flex;
  flex-direction: row;
  align-items: left;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: #109cf1;
  }
`;
const BackToClients = styled.p`
  margin-left: 12px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 13px;
  color: #334d6e;
  opacity: 0.5;
  &:hover,
  &:focus,
  &:active {
    color: #109cf1;
  }
`;
const LowerPart = styled.div`
  width: 100%;
  min-width: 417px;
  max-width: 417px;
  background: white;
`;
const Wrapper = styled.div`
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  margin-left: 36px;
  padding-bottom: 20px;
`;
export default ClientLeftInfo;
