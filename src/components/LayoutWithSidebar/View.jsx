import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import PrivateRoute from './components/PrivateRoute';
import { routes } from '../../routes/Routes';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ROLES from '../../utils/constants/roles';
import DashBoard from '../Dashboard';
import Clients from '../Clients';
import ClientProfile from '../ClientProfile';
import Schedule from '../Schedule';
import './LayoutWithSidebar.scss';

const { Content } = Layout;

function LayoutWithSidebar(props) {
  const { userType } = props;

  return (
    <Layout className="layout-with-sidebar" hasSider>
      <Sidebar />
      <Layout className="layout-with-sidebar">
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
      </Layout>
    </Layout>
  );
}

export default LayoutWithSidebar;
