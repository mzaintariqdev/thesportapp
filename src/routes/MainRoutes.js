import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Clients from '../pages/clients';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/header/header';
import ClientProfile from '../pages/client-profile/clientProfile';
import styled from 'styled-components';
import { routes } from './Routes';
import DashBoard from '../pages/dashboard';
import Schedule from '../pages/schedule';

const { Content } = Layout;

function MainRoutes() {
  return (
    <BrowserRouter>
      <SidebarLayout hasSider>
        <Sidebar />
        <SidebarLayout>
          <Header />
          <Content className="content">
            <Routes>
              <Route exact path={routes.homeUrl} element={<DashBoard />} />
              <Route path={routes.clients} element={<Clients />} />
              <Route path={routes.clientProfile} element={<ClientProfile />} />
              <Route path={routes.scheduleUrl} element={<Schedule />} />
              <Route path="*" element={<DashBoard />} />
            </Routes>
          </Content>
        </SidebarLayout>
      </SidebarLayout>
    </BrowserRouter>
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

export default MainRoutes;
