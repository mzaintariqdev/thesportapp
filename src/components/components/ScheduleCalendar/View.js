import React, { useEffect, useState } from "react";
import { Calendar } from "react-big-calendar";

// import AddEvents from "./components/AddEvents";
import CustomEventComponent from "./components/CustomEventComponent";
import { eventStyleGetter, localizer } from "./helper";
import CustomToolbar from "./components/CustomToolBar";
// import Popping from "./components/Popping";

import styled from "styled-components";
import { Modal } from "antd";

const ScheduleCalendar = (props) => {
  const { bookings, actions } = props;
  console.log("bookings", bookings);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [renderStatus, rerender] = useState(false);

  useEffect(() => {
    // ShowEventsApi();
  }, []);

  useEffect(() => {
    // ShowEventsApi();
  }, [renderStatus]);

  const openEventClick = (event) => {
    setOpen(true);
    if (event.id) {
      // ShowEventApi(event.id);
    }

    return;
  };

  const closeEventClick = () => {
    setOpen(false);
    // setTimeout(() => closeEvent(), 300);
  };

  const handleSelect = (e) => {
    setOpenModal(true);

    console.log("selected box");
  };

  const handleHide = () => {
    setOpenModal(false);
  };

  return (
    <CalendarWrapper>
      <Modal footer={false} visible={openModal} onCancel={handleHide}>
        {/* <AddEvents onHide={handleHide} /> */}
      </Modal>
      {/* <Popping
        open={open}
        handleOpen={openEventClick}
        handleClose={closeEventClick}
        renderStatus={renderStatus}
        rerender={rerender}
      /> */}
      <StyledCalendar
        defaultDate={new Date("2022-11-03T19:18:27.146Z")}
        localizer={localizer}
        eventPropGetter={eventStyleGetter}
        // events={events}
        events={bookings}
        selectable={true}
        components={{ event: CustomEventComponent, toolbar: CustomToolbar }}
        onSelectSlot={(e) => {
          handleSelect(e);
        }}
        startAccessor="start"
        longPressThreshold={10}
        endAccessor="end"
        style={{ height: 500, margin: 50, fontFamily: "Patrick Hand" }}
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
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: #323c47;
  }

  .rbc-date-cell {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: #323c47;
  }
`;

export default ScheduleCalendar;
