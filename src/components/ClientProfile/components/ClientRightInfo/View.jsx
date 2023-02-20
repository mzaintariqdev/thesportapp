import React from 'react';
import { Tabs } from 'antd';

import ClientProfile from './components/ClientProfile';
import Billing from './components/Billing';
import ScheduleList from './components/ScheduleList';
import ClientWallet from './components/ClientWallet';

import './ClientRightInfo.scss';

const { TabPane } = Tabs;
function ClientRightInfo() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="client-right-info">
      <ClientWallet />
      <div className="client-tabs">
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Profile" key="1">
            <ClientProfile />
          </TabPane>
          <TabPane tab="Billing" key="2">
            <Billing />
          </TabPane>
          <TabPane tab="Schedule" key="3">
            <ScheduleList />
          </TabPane>
          <TabPane tab="Activity" key="5">
            Content of Tab Pane 5
          </TabPane>
          <TabPane tab="Documents" key="6">
            Content of Tab Pane 6
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default ClientRightInfo;
