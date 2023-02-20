import React from 'react';
import { Calendar } from 'react-big-calendar';

import CustomEventComponent from './components/CustomEventComponent';
import { eventStyleGetter, localizer } from './helper';
import CustomToolbar from './components/CustomToolBar';

import AddBookings from './components/AddBookings';
import EditBooking from './components/EditBooking';

import './ScheduleCalendar.scss';

const ScheduleCalendar = (props) => {
  const { bookings, actions } = props;

  const openEventClick = (event) => {
    actions.setBookingId({ id: event.id });
  };

  // const closeEventClick = () => {
  //   // setTimeout(() => closeEvent(), 300);
  // };

  const handleSelect = (e) => {
    actions.addBookingDate({ date: e.start });
  };

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  return (
    <div className="schedule-calendar-wrapper">
      <AddBookings />
      <EditBooking />
      <Calendar
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
    </div>
  );
};

export default ScheduleCalendar;
