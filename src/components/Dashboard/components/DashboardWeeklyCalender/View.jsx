import React from 'react';

import BookingList from './components/BookingList';
import WeeklyCalender from './components/WeeklyCalendar';

import './DashboardWeeklyCalendar.scss';

function DashboardWeeklyCalender() {
  return (
    <div className="dashboard-weekly-calendar">
      <div className="dashboard-weekly-calendar__sub-wrap">
        <p className="dashboard-weekly-calendar__sub-wrap__heading">
          Unpaid Bookings
        </p>
        <div className="dashboard-weekly-calendar__sub-wrap-bar" />
        <WeeklyCalender />
      </div>
      <BookingList />
    </div>
  );
}

export default DashboardWeeklyCalender;
