import React, { useEffect } from "react";

import ScheduleCalendar from "../components/ScheduleCalendar";
import { Spin } from "antd";

function Schedule(props) {
  const { isScheduleLoading, actions } = props;
  console.log("is loading", isScheduleLoading);
  useEffect(() => {
    actions.getScheduleBookings();
  }, []);

  return (
    <Spin spinning={isScheduleLoading}>
      <ScheduleCalendar />
    </Spin>
  );
}

export default Schedule;
