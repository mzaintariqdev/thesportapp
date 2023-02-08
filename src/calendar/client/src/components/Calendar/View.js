import React, { useEffect, useState } from "react";
import { Calendar } from "react-big-calendar";
import { Modal } from "react-bootstrap";

import AddEvents from "../AddEvents";
import CustomEventComponent from "./componets/CustomEventComponent";
import { eventStyleGetter, localizer } from "./helper";
import CustomToolbar from "./componets/CustomToolBar";
import Popping from "../Popping";

import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = ({ events, ShowEventApi, closeEvent, ShowEventsApi }) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [renderStatus, rerender] = useState(false);

  useEffect(() => {
    ShowEventsApi();
  }, []);

  useEffect(() => {
    ShowEventsApi();
  }, [renderStatus]);

  const openEventClick = (event) => {
    setOpen(true);
    if (event.id) {
      ShowEventApi(event.id);
    }

    return;
  };

  const closeEventClick = () => {
    setOpen(false);
    setTimeout(() => closeEvent(), 300);
  };

  const handleSelect = (e) => {
    setOpenModal(true);

    console.log("selected box");
  };

  const handleHide = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal show={openModal} onHide={handleHide}>
        <AddEvents onHide={handleHide} />
      </Modal>
      <Popping
        open={open}
        handleOpen={openEventClick}
        handleClose={closeEventClick}
        renderStatus={renderStatus}
        rerender={rerender}
      />
      <Calendar
        defaultDate={new Date("2022-11-03T19:18:27.146Z")}
        localizer={localizer}
        eventPropGetter={eventStyleGetter}
        events={events}
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
    </div>
  );
};

export default MyCalendar;
