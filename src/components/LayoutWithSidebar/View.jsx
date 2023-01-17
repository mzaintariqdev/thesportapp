import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Layout } from "antd";

import PrivateRoute from "./components/PrivateRoute";
import { routes } from "../../routes/Routes";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styled from "styled-components";
import ROLES from "../../utils/constants/roles";
import DashBoard from "../Dashboard";
import Clients from "../Clients";
import ClientProfile from "../ClientProfile";
import Schedule from "../Schedule";

const { Content } = Layout;

function LayoutWithSidebar(props) {
  const { userType } = props;

  return (
    <SidebarLayout hasSider>
      <Sidebar />
      <SidebarLayout>
        <Header />
        <Content className="content">
          <Switch>
            <PrivateRoute
              exact={true}
              userType={userType}
              path={routes.homeUrl}
              Component={DashBoard}
              permittedUserTypes={[ROLES.admin, ROLES.club]}
            />
            <PrivateRoute
              exact={true}
              userType={userType}
              path={routes.clients}
              Component={Clients}
              permittedUserTypes={[ROLES.admin, ROLES.club]}
            />
            <PrivateRoute
              exact={true}
              userType={userType}
              path={routes.clientProfile}
              Component={ClientProfile}
              permittedUserTypes={[ROLES.admin, ROLES.club]}
            />
            <PrivateRoute
              exact={true}
              userType={userType}
              path={routes.scheduleUrl}
              Component={Schedule}
              permittedUserTypes={[ROLES.admin, ROLES.club]}
            />
            <Redirect to={routes.homeUrl} />
          </Switch>
        </Content>
      </SidebarLayout>
    </SidebarLayout>
  );
}

const SidebarLayout = styled(Layout)`
  height: 100vh;
  overflow-y: hidden;

  .content {
    background-color: styles.$variables-white;
    height: calc(100vh - 20px);
    overflow-y: scroll;
    margin-bottom: 30px;
  }
`;

export default LayoutWithSidebar;
