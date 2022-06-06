import React from "react";

import styled from "styled-components";
import AntAvatar from "../../components/ant/Avatar";
import AntTable from "../../components/check";
import { UserOutlined } from "@ant-design/icons";

import { heading, sampleData } from "../../components/table/data";

const Clients = () => (
  <Wrapper>
    <UpperDiv></UpperDiv>
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
          <Email>{data.email}</Email>
          <CompanyName>{data.companyName}</CompanyName>
          <MobilePhone>{data.mobile}</MobilePhone>
          <Amount>{data.amountDue}</Amount>
          <LastSession>{data.lastSession}</LastSession>
        </DataRow>
      ))}
    </TableData>
  </Wrapper>
);
const UpperDiv = styled.div`
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
const LastSession = styled.p`
  width: 120px;
  height: auto;
  font-family: "Poppins";

  font-weight: 400;
  font-size: 13px;

  letter-spacing: 0.01em;

  /* table_gray */

  color: #707683;
`;
const Amount = styled.p`
  margin-left: 25px;
  width: 120px;
  height: auto;
  font-family: "Poppins";

  font-weight: 400;
  font-size: 13px;

  letter-spacing: 0.01em;

  /* table_gray */

  color: #707683;
`;
const MobilePhone = styled.p`
  margin-left: 25px;
  width: 120px;
  height: auto;
  font-family: "Poppins";

  font-weight: 400;
  font-size: 13px;

  letter-spacing: 0.01em;

  /* table_gray */

  color: #707683;
`;
const CompanyName = styled.p`
  margin-left: 25px;
  width: 120px;
  height: auto;
  font-family: "Poppins";

  font-weight: 400;
  font-size: 13px;

  letter-spacing: 0.01em;

  /* table_gray */

  color: #707683;
`;
const Email = styled.p`
  width: 100%;
  margin-left: 64px;
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
  margin-left: 59px;
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
  &:hover,
  :active,
  :focus {
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
  cursor: pointer;
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
