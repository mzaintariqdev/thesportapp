import React from "react";

import { DatePicker, Space, TimePicker } from "antd";
import TableComp from "../components/TableComp";
import { routes } from "../../routes/Routes";
import { clientColumns, clientMockData } from "./constants";
import { useHistory } from "react-router-dom";

const Clients = () => {
  const history = useHistory();

  const composeUrl = (id) => `${routes.clientProfile}`;

  const openStartupDetails = (record) => history.push(composeUrl(record.id));
  return (
    <>
      <TableComp
        onRow={(record) => ({ onClick: () => openStartupDetails(record) })}
        columns={clientColumns}
        dataSource={clientMockData}
        pagination={false}
        rowKey={(record) => record.id}
      />
    </>
  );
};

export default Clients;
