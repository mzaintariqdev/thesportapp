import React from "react";

import styled from "styled-components";
import AntAvatar from "../../components/ant/Avatar";
import AntTable from "../../components/check";
import { UserOutlined } from "@ant-design/icons";

import { heading, sampleData } from "../../components/table/data";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true,
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
    ellipsis: true,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const Clients = () => (
  <Wrapper>
    <TableHead>
      <Head>
        {heading.map((header) => (
          <HeadingItem marginRight={header.marginRight} width={header.width}>
            {header.name}
          </HeadingItem>
        ))}
      </Head>
    </TableHead>
    <TableData>
      {sampleData.map((data) => (
        <DataRow>
          <ClientProfile>
            <AntAvatar
              size={24}
              style={{ marginRight: "12px" }}
              icon={<UserOutlined />}
            />{" "}
            <Name>{data.name}</Name>
          </ClientProfile>
          <Email>{data.email}asassasasasasa</Email>
        </DataRow>
      ))}
    </TableData>
  </Wrapper>
);
const Email = styled.p`
margin:
0background: red;
  max-width: 210px;
  height: auto;
`;
const Name = styled.div`
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 15px;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.assetBlack};
`;
const ClientProfile = styled.div`
  margin-left: 64px;
  width: 232px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TableData = styled.div`
  width: 100%;
  height: auto;
`;
const DataRow = styled.div`
  border-bottom: 1px solid #ebeff2;
  min-height: 64px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 64px;
  margin-right: 24px;
`;
const TableHead = styled.div`
  max-width: 69rem;
  width: 69rem;
  height: 48px;
  border-bottom: 1px solid #ebeff2;
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const HeadingItem = styled.div`
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  width: ${(p) => p.width};
  margin-right: ${(p) => p.marginRight};
  font-size: 13px;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.assetGray2};
`;
const Wrapper = styled.div`
  margin-left: 36px;
  margin-top: 24px;
  height: auto;
  max-height: 697px;
  width: 69rem;
  background: white;
  filter: drop-shadow(0px 6px 18px rgba(0, 0, 0, 0.06));
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Clients;
// import React from "react";

// import styled from "styled-components";
// import Table from "../../components/table/tableComp";

// const Clients = () => (
//   <Wrapper>
//     <Table />
//   </Wrapper>
// );
// const Wrapper = styled.div`
//   margin-left: 36px;
//   margin-right: 38px;
//   weight: 1110px;
//   height: auto;
//   max-weight: 1110px;
//   max-height: 697px;
//   filter: drop-shadow(0px 6px 18px rgba(0, 0, 0, 0.06));
// `;
// export default Clients;
