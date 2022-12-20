import React from "react";

import { useNavigate } from "react-router-dom";
import { DatePicker, Space, TimePicker } from "antd";
import TableComp from "../../components/TableComp";
import { routes } from "../../routes/Routes";
import { clientColumns, clientMockData } from "./constants";

const Clients = () => {
  const navigate = useNavigate();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    var today = new Date(date);
    console.log(today);
    console.log(today.toString());

    today.setHours(9, 30, 0);
    var today_morning = today;
    console.log(today_morning.toString(), today_morning.toISOString());
  };

  const onChangeTime = (time, timeString) => {
    // setTimeString(timeString);
    console.log(time);
    console.log(timeString);
  };
  const composeUrl = (id) => `${routes.clientProfile}`;

  const openStartupDetails = (record) => navigate(composeUrl(record.id));
  return (
    <>
      <Space direction="vertical">
        <DatePicker format={"ll"} onChange={onChange} />
        <TimePicker.RangePicker format={"h:mm"} onOk={onChangeTime} />;
      </Space>
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
