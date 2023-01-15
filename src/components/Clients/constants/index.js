import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

import AntAvatar from "../../components/ant/Avatar";

export const clientColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, { name }) => (
      <ClientProfile>
        <AntAvatar
          size={24}
          style={{ marginRight: "12px" }}
          icon={<UserOutlined />}
        />
        <Name>{name}</Name>
      </ClientProfile>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (_, { email }) => <Email>{email}</Email>,
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "Mobile",
    key: "mobile",
    dataIndex: "mobile",
  },
  {
    title: "Amount Due",
    key: "amountDue",
    dataIndex: "amountDue",
  },
  {
    title: "Last Session",
    key: "lastSession",
    dataIndex: "lastSession",
  },
];

export const clientMockData = [
  {
    id: "1",
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    companyName: "Hatchbuck",
    mobile: "+971 500000000",
    amountDue: "0 AED",
    lastSession: "5 Minutes ago",
  },
  {
    id: "2",
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    companyName: "Hatchbuck",
    mobile: "+971 500000000",
    amountDue: "0 AED",
    lastSession: "5 Minutes ago",
  },
  {
    id: "3",
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    companyName: "Hatchbuck",
    mobile: "+971 500000000",
    amountDue: "0 AED",
    lastSession: "5 Minutes ago",
  },
  {
    id: "4",
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    companyName: "Hatchbuck",
    mobile: "+971 500000000",
    amountDue: "0 AED",
    lastSession: "5 Minutes ago",
  },
  {
    id: "5",
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    companyName: "Hatchbuck",
    mobile: "+971 500000000",
    amountDue: "0 AED",
    lastSession: "5 Minutes ago",
  },
];

const Email = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.01em;
  color: #707683;
`;
const Name = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.01em;
  color: #323c47;
`;
const ClientProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
