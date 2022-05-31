import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import "./sidebar.css";
import { UserOutlined } from "@ant-design/icons";
import AntAvatar from "../../components/ant/Avatar";
import ToggleButton from "../../assets/icons/toggleButton.svg";
import { ReactComponent as CategoryLogo } from "../../assets/icons/category.svg";
import { ReactComponent as ScheduleLogo } from "../../assets/icons/schedule.svg";
import { ReactComponent as ClientLogo } from "../../assets/icons/client.svg";
import { ReactComponent as GroupLogo } from "../../assets/icons/group.svg";
import { ReactComponent as ReportLogo } from "../../assets/icons/report.svg";
import { ReactComponent as SettingsLogo } from "../../assets/icons/settings.svg";
import AntDivider from "../ant/Divider";

function Sidebar() {
  const Links = [
    {
      name: "Dashboard",
      path: "/",
      Icon: <CategoryLogo />,
    },
    {
      name: "Schedule",
      path: "/schedule",
      Icon: <ScheduleLogo />,
    },
    {
      name: "Clients",
      path: "/clients",
      Icon: <ClientLogo />,
    },
    {
      name: "Groups",
      path: "/Groups",
      Icon: <GroupLogo />,
    },
    {
      name: "Reports",
      path: "/reports",
      Icon: <ReportLogo />,
    },
  ];
  const [toggle, setToggle] = useState(false);
  const active = toggle ? "toggleActive-link" : "active-link";
  return (
    <div className={toggle ? "toggleSidebar" : "sidebar"}>
      <SideBarHeader toggle={toggle}>
        {toggle ? "TSA" : "TheSportsApp"}
      </SideBarHeader>
      <User toggle={toggle}>
        <AntAvatar size={46} icon={<UserOutlined />} />
        <UserData toggle={toggle}>
          <UserName>Sierra Ferguson</UserName>
          <UserDesignation>Front-Desk</UserDesignation>
        </UserData>
      </User>{" "}
      <Wrapper toggle={toggle}>
        {Links.map(({ name, path, Icon }) => (
          <NavLink
            className={({ isActive }) => (isActive ? active : "link")}
            key={name}
            exact
            to={path}
          >
            <Flex>
              {Icon}
              {toggle ? "" : <p>{name}</p>}
            </Flex>
          </NavLink>
        ))}
      </Wrapper>
      <AntDivider style={{ marginTop: "45px" }} />
      <Settings toggle={toggle}>
        <SettingsLogo />
        {toggle ? (
          ""
        ) : (
          <p style={{ marginLeft: "12px", marginBottom: 0 }} className="link">
            Admin
          </p>
        )}
      </Settings>
      <Toggle
        toggle={toggle}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <img style={{ height: "20px" }} src={ToggleButton} alt="toggle" />
        <ToggleText toggle={toggle}>Toggle sidebar</ToggleText>
      </Toggle>
    </div>
  );
}
const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${(p) => (p.toggle ? "35px" : "22px")};
  margin-left: ${(p) => (p.toggle ? "0" : "24px")};
  cursor: pointer;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 13px;
`;
const SideBarHeader = styled.div`
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 18px;
  color: ${(p) => p.theme.colors.assetBlue};
  margin-left: ${(p) => (p.toggle ? "0" : "24px")};
  margin-top: 17px;
`;

const User = styled.div`
  font-family: ${(p) => p.theme.font.family};
  margin-left: ${(p) => (p.toggle ? "0" : "24px")};
  margin-top: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 39px;
`;
const UserData = styled.div`
  display: ${(p) => (p.toggle ? "none" : "flex")};
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
const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: left;

  margin-left: ${(p) => (p.toggle ? "0" : " 22px")};
`;

const Toggle = styled.div`
  cursor: pointer;
  margin-left: ${(p) => (p.toggle ? "0" : " 27px")};
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 22px;
`;
const ToggleText = styled.div`
  display: ${(p) => (p.toggle ? "none" : "block")};
  margin-left: 14px;
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.medium};
  font-size: 11px;
  color: ${(p) => p.theme.colors.assetGray2};
`;

export default Sidebar;
