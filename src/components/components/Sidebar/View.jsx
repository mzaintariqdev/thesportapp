import { useHistory } from "react-router-dom";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import ToggleButton from "../../../assets/icons/toggleButton.svg";
import { ReactComponent as SettingsLogo } from "../../../assets/icons/settings.svg";
import AntDivider from "../ant/Divider";
import sidebarOptionsByRole from "./utils/constants";
import { Menu, Layout, Button } from "antd";
import classnames from "classnames";
import SidebarHeader from "./components/SidebarHeader/View";
import "./Sidebar.scss";

const { Sider } = Layout;

function Sidebar(props) {
  const { userType, actions } = props;
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  const items = useMemo(
    () =>
      sidebarOptionsByRole?.map((item) =>
        !item.acceptedTypes.includes(userType)
          ? null
          : {
              key: item.key,
              label: item.label,
              icon: item.icon,
              onClick: () => history.push(item.path),
            }
      ),
    [userType]
  );

  return (
    <div className="sidebar-container">
      <Sider
        trigger={null}
        className={classnames(
          "sidebar",
          collapsed ? "sidebar-collapsed" : "sidebar-expanded"
        )}
        collapsible
        collapsed={collapsed}
      >
        <SidebarHeader
          collapsed={collapsed}
          userName="Sierra Ferguson"
          designation="Front-Desk"
        />
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={["Dashboard"]}
          items={items}
        />
        <AntDivider style={{ marginTop: "45px" }} />
        <Settings collapsed={collapsed}>
          <SettingsLogo />
          {collapsed ? (
            ""
          ) : (
            <p style={{ marginLeft: "12px", marginBottom: 0 }} className="link">
              Admin
            </p>
          )}
        </Settings>
        <Button onClick={actions.logout}>Logout</Button>
        <Toggle
          collapsed={collapsed}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <img style={{ height: "20px" }} src={ToggleButton} alt="toggle" />
          <ToggleText toggle={collapsed}>Toggle sidebar</ToggleText>
        </Toggle>
      </Sider>
    </div>
  );
}
const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${(p) => (p.collapsed ? "35px" : "22px")};
  margin-left: 24px;
  cursor: pointer;
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
