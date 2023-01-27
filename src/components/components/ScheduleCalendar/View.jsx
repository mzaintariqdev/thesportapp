import React, { useState } from 'react';
import { Calendar } from 'react-big-calendar';

import CustomEventComponent from './components/CustomEventComponent';
import { eventStyleGetter, localizer } from './helper';
import CustomToolbar from './components/CustomToolBar';

import styled from 'styled-components';

import AddBookings from './components/AddBookings';
import EditBooking from './components/EditBooking';

const ScheduleCalendar = (props) => {
  const { bookings, actions } = props;

  const openEventClick = (event) => {
    actions.setBookingId({ id: event.id });
  };

  const closeEventClick = () => {
    // setTimeout(() => closeEvent(), 300);
  };

  const handleSelect = (e) => {
    actions.addBookingDate({ date: e.start });
  };

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  return (
    <CalendarWrapper>
      <AddBookings />
      <EditBooking />
      <StyledCalendar
        localizer={localizer}
        // formats={{
        //   timeGutterFormat: "HH:mm",
        // }}
        formats={{
          timeGutterFormat: 'HH:mm',
        }}
        eventPropGetter={eventStyleGetter}
        // events={events}

        events={bookings}
        step={30}
        selectable={true}
        components={{ event: CustomEventComponent, toolbar: CustomToolbar }}
        onSelectSlot={(e) => {
          handleSelect(e);
        }}
        startAccessor="start"
        longPressThreshold={10}
        endAccessor="end"
        defaultDate={new Date()}
        min={startOfDay}
        max={endOfDay}
        style={{ height: 500, margin: 50, fontFamily: 'Patrick Hand' }}
        onSelectEvent={openEventClick}
      />
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div``;
const StyledCalendar = styled(Calendar)`
  .rbc-toolbar {
    background: #ffffff;
    min-height: 102px;
    padding: 0 20px;
    border-radius: 4px;
    margin-bottom: 0px;
  }

  .rbc-month-view,
  .rbc-time-view {
    background: white;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    min-height: 744px;
  }

  .rbc-header {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: #323c47;
  }

  .rbc-date-cell {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: #323c47;
  }
`;

export default ScheduleCalendar;
