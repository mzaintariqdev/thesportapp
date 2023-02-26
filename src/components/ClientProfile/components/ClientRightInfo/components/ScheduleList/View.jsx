import React, { useEffect } from 'react';

import Schedule from './components/Schedule';
import './ScheduleList.scss';
import { useParams } from 'react-router-dom';

const ScheduleList = (props) => {
  const { clientSchedules, actions } = props;
  const { id } = useParams();
  useEffect(() => {
    actions.getClientSchedules({ id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="schedule-list-wrapper">
      {clientSchedules?.map((schedule, index) => (
        <Schedule data={schedule} key={index} />
      ))}
    </div>
  );
};

export default ScheduleList;
