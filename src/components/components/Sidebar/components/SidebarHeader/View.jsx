import React from "react";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import AntAvatar from "../../../ant/Avatar";

function SidebarHeader(props) {
  const { collapsed, userName, designation } = props;

  return (
    <>
      <Header collapsed={collapsed}>
        {collapsed ? "TSA" : "TheSportsApp"}
      </Header>
      <User collapsed={collapsed}>
        <AntAvatar size={46} icon={<UserOutlined />} />
        <UserData collapsed={collapsed}>
          <UserName>{userName}</UserName>
          <UserDesignation>{designation}</UserDesignation>
        </UserData>
      </User>
    </>
  );
}

const Header = styled.div`
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 18px;
  color: ${(p) => p.theme.colors.assetBlue};
  margin-left: ${(p) => (p.collapsed ? "15px" : "24px")};
  margin-top: 17px;
`;

const User = styled.div`
  font-family: ${(p) => p.theme.font.family};
  margin-left: ${(p) => (p.collapsed ? "12px" : "24px")};
  margin-top: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 39px;
`;
const UserData = styled.div`
  display: ${(p) => (p.collapsed ? "none" : "flex")};
  flex-direction: column;
  margin-left: 16px;
`;
const UserName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => p.theme.colors.assetBlack};
`;
const UserDesignation = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.assetGray2};
`;

export default SidebarHeader;
