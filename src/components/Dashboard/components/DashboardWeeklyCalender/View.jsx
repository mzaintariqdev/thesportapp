import React, { useEffect, useState } from 'react';

import BookingList from './components/BookingList';
import WeeklyCalender from './components/WeeklyCalendar';

import './DashboardWeeklyCalendar.scss';
import { Spin } from 'antd';
import RenderIf from '../../../components/RenderIf';

function DashboardWeeklyCalender(props) {
  const { actions, isLoading, isMoreLoading, bookingList } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    actions.getBookingListByDate({ date: selectedDate });
  }, [selectedDate]);

  const getMoreBookings = () => {
    actions.getMoreBookingListByDate({ date: selectedDate });
  };

  return (
    <Spin spinning={isLoading}>
      <div className="dashboard-weekly-calendar">
        <div className="dashboard-weekly-calendar__sub-wrap">
          <p className="dashboard-weekly-calendar__sub-wrap__heading">
            Unpaid Bookings
          </p>
          <div className="dashboard-weekly-calendar__sub-wrap-bar" />
          <WeeklyCalender
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <RenderIf condition={bookingList?.length > 0}>
          <BookingList
            getMoreBookings={getMoreBookings}
            bookingList={bookingList}
            isLoading={isMoreLoading}
          />
        </RenderIf>
        <RenderIf condition={bookingList?.length === 0}>
          <p
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '20px',
            }}
          >
            No Data Available
          </p>
        </RenderIf>
      </div>
    </Spin>
  );
}

export default DashboardWeeklyCalender;
