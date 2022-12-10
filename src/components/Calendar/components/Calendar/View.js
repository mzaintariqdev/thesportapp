import React, { useEffect, useState } from "react";
import { Calendar } from "react-big-calendar";
import { Modal } from "react-bootstrap";

import AddEvents from "../AddEvents";
import CustomEventComponent from "./componets/CustomEventComponent";
import { eventStyleGetter, localizer } from "./helper";
import CustomToolbar from "./componets/CustomToolBar";
import Popping from "../Popping";

import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";

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
        events={[
          {
            end: new Date("2022-11-04T10:30:00.000Z"),
            start: new Date("2022-11-04T04:30:00.000Z"),
            title: "Event 1",
          },
          {
            end: new Date("2022-11-04T08:00:00.000Z"),
            start: new Date("2022-11-04T06:00:00.000Z"),
            title: "Event 2",
          },
          {
            end: new Date("2022-11-04T06:30:00.000Z"),
            start: new Date("2022-11-04T04:30:00.000Z"),
            title: "Event 3",
          },
          {
            end: new Date("2022-11-04T05:30:00.000Z"),
            start: new Date("2022-11-04T04:30:00.000Z"),
            title: "Event 4",
          },
          {
            end: new Date("2022-11-04T06:00:00.000Z"),
            start: new Date("2022-11-04T05:00:00.000Z"),
            title: "Event 5",
          },
          {
            end: new Date("2022-11-04T06:00:00.000Z"),
            start: new Date("2022-11-04T05:00:00.000Z"),
            title: "Event 6",
          },
          {
            end: new Date("2022-11-04T05:30:00.000Z"),
            start: new Date("2022-11-04T04:30:00.000Z"),
            title: "Event 7",
          },
          {
            end: new Date("2022-11-04T05:30:00.000Z"),
            start: new Date("2022-11-04T04:30:00.000Z"),
            title: "Event 8",
          },
          {
            end: new Date("2022-11-04T05:30:00.000Z"),
            start: new Date("2022-11-04T04:30:00.000Z"),
            title: "Event 9",
          },
          {
            end: new Date("2022-11-04T07:30:00.000Z"),
            start: new Date("2022-11-04T05:30:00.000Z"),
            title: "Event 10",
          },
          {
            end: new Date("2022-11-04T08:00:00.000Z"),
            start: new Date("2022-11-04T07:00:00.000Z"),
            title: "Event 11",
          },
          {
            end: new Date("2022-11-04T08:00:00.000Z"),
            start: new Date("2022-11-04T07:00:00.000Z"),
            title: "Event 12",
          },
          {
            end: new Date("2022-11-04T08:00:00.000Z"),
            start: new Date("2022-11-04T07:00:00.000Z"),
            title: "Event 13",
          },
          {
            end: new Date("2022-11-04T08:00:00.000Z"),
            start: new Date("2022-11-04T07:00:00.000Z"),
            title: "Event 14",
          },
          {
            end: new Date("2022-11-04T03:00:00.000Z"),
            start: new Date("2022-11-04T01:30:00.000Z"),
            title: "Event 15",
          },
          {
            end: new Date("2022-11-04T12:30:00.000Z"),
            start: new Date("2022-11-04T11:00:00.000Z"),
            title: "Event 16",
          },
        ]}
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

export default MyCalendar;
