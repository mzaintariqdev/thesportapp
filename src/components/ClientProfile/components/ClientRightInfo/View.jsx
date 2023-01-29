import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";

import ClientProfile from "./components/ClientProfile";
import Billing from "./components/Billing";
import ScheduleList from "./components/ScheduleList";

const { TabPane } = Tabs;
function ClientRightInfo() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Wrapper>
      <UpperPart>
        <Flex>
          <Heading>Balance</Heading>
          <SubHeading>0 AED</SubHeading>
        </Flex>
        <Divider />
        <Flex>
          <Heading>Due</Heading>
          <SubHeading>200 AED</SubHeading>
        </Flex>
        <Divider />
        <Flex>
          <Heading>Cancelled</Heading>
          <SubHeading>0</SubHeading>
        </Flex>
        <Divider />
        <Flex>
          <Heading>No-Show</Heading>
          <SubHeading>0 </SubHeading>
        </Flex>
      </UpperPart>
      <LowerPart>
        <AntTabPane defaultActiveKey="1" onChange={onChange}>
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
        </AntTabPane>
      </LowerPart>
    </Wrapper>
  );
}
const AntTabPane = styled(Tabs)`
  .ant-tabs-nav .ant-tabs-tab {
    margin-left: 30px;
    font-family: "Poppins";

    font-weight: 500;
    font-size: 15px;

    color: #323c47;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    border-bottom: 2px solid #323c47;
  }
  .ant-tabs-nav .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #323c47;
  }
  .ant-tabs-nav {
    margin: 0px !important;
  }

  .ant-tabs-content-holder {
    border-width: 1px;
    border-color: #f0f0f0;
    border-style: solid;
    border-top-style: none;
    padding: 1rem;
  }
`;
const UpperPart = styled.div`
  width: 100%;
  height: 124px;
  background: white;
  margin-top: 39px;
  margin-bottom: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  color: #acacac;
  margin: 0;
`;
const SubHeading = styled.p`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 24px;
  color: #333333;
  margin: 0;
`;
const Divider = styled.p`
  width: 87px;
  height: 0px;
  border: 1px solid #f0f0f0;
  transform: rotate(90deg);
`;
const LowerPart = styled.div`
  width: 100%;
  background: white;
`;
const Wrapper = styled.div`
  max-width: 652px;
  min-width: 652px;
  margin-left: 39px;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export default ClientRightInfo;
