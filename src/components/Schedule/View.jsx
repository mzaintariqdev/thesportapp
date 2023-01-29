import React, { useEffect } from 'react';
import { Spin } from 'antd';

import ScheduleCalendar from '../components/ScheduleCalendar';

function Schedule(props) {
  const { isScheduleLoading, actions } = props;

  useEffect(() => {
    actions.getScheduleBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Spin spinning={isScheduleLoading}>
      <ScheduleCalendar />
    </Spin>
  );
}

export default Schedule;
