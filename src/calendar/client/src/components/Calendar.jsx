import React, { useCallback, useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Popping from "./Popping";
import { closeEvent, ShowEventApi, ShowEventsApi } from "../Redux/actions";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import AddEvents from "./AddEvents";
import Toolbar from "react-big-calendar/lib/Toolbar";
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = ({ events, ShowEventApi, closeEvent, ShowEventsApi }) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [renderStatus, rerender] = useState(false);

  useEffect(() => {
    ShowEventsApi();
    console.log("i renderd because of refresh or start");
  }, []);

  useEffect(() => {
    ShowEventsApi();
    console.log("i renderd");
  }, [renderStatus]);

  const openEventClick = (event) => {
    console.log(event);
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
    console.log(e?.start, "clicked");
    setOpenModal(true);
  };
  const handleHide = () => {
    setOpenModal(false);
  };

  const eventStyleGetter = function (event, start, end, isSelected) {
    console.log(event?.status);
    var style = {};
    var backgroundColor = "#" + event.hexColor;

    if (event.status === "unpaid") {
      style = {
        backgroundColor: "#40FF53",
        borderRadius: "0px",
        opacity: 0.8,
        color: "black",
        border: "0px",
        display: "block",
      };
    } else {
      style = {
        backgroundColor: "#d8d8d8",
        borderRadius: "0px",
        opacity: 0.8,
        color: "black",
        border: "0px",
        display: "block",
      };
    }

    return {
      style: style,
    };
  };

  const EventComponent = (event) => {
    console.log("custom", event.event);
    return (
      <div style={{ display: "flex", height: "40px" }}>
        <h1 style={{ color: "black", fontSize: "12px" }}>
          {event.event.status}
        </h1>
        <h1 style={{ color: "black", fontSize: "12px" }}>
          {event.event.client}
        </h1>
      </div>
    );
  };
  class CustomToolbar extends Toolbar {
    render() {
      return (
        <div className="rbc-toolbar">
          <span className="rbc-btn-group">
            <button type="button" onClick={() => this.navigate("TODAY")}>
              today
            </button>
            <button type="button" onClick={() => this.navigate("PREV")}>
              back
            </button>
            <button type="button" onClick={() => this.navigate("NEXT")}>
              next
            </button>
          </span>
          <span className="rbc-toolbar-label">
            <button type="button" onClick={this.view.bind(null, "month")}>
              Month
            </button>
            <button type="button" onClick={this.view.bind(null, "week")}>
              Week
            </button>
            <button type="button" onClick={this.view.bind(null, "day")}>
              Day
            </button>
            {/* <button type="button" onClick={this.view.bind(null, "agenda")}>
              Agenda
            </button> */}
          </span>
          <span className="rbc-btn-group">{this.props.label}</span>
        </div>
      );
    }

    navigate = (action) => {
      this.props.onNavigate(action);
    };
  }

  return (
    <div>
      <Modal show={openModal} onHide={handleHide}>
        <AddEvents />
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
        events={events} // events
        // events={[
        //   {
        //     end: new Date("2022-11-04T10:30:00.000Z"),
        //     start: new Date("2022-11-04T04:30:00.000Z"),
        //     title: "Event 1",
        //   },
        //   {
        //     end: new Date("2022-11-04T08:00:00.000Z"),
        //     start: new Date("2022-11-04T06:00:00.000Z"),
        //     title: "Event 2",
        //   },
        //   {
        //     end: new Date("2022-11-04T06:30:00.000Z"),
        //     start: new Date("2022-11-04T04:30:00.000Z"),
        //     title: "Event 3",
        //   },
        //   {
        //     end: new Date("2022-11-04T05:30:00.000Z"),
        //     start: new Date("2022-11-04T04:30:00.000Z"),
        //     title: "Event 4",
        //   },
        //   {
        //     end: new Date("2022-11-04T06:00:00.000Z"),
        //     start: new Date("2022-11-04T05:00:00.000Z"),
        //     title: "Event 5",
        //   },
        //   {
        //     end: new Date("2022-11-04T06:00:00.000Z"),
        //     start: new Date("2022-11-04T05:00:00.000Z"),
        //     title: "Event 6",
        //   },
        //   {
        //     end: new Date("2022-11-04T05:30:00.000Z"),
        //     start: new Date("2022-11-04T04:30:00.000Z"),
        //     title: "Event 7",
        //   },
        //   {
        //     end: new Date("2022-11-04T05:30:00.000Z"),
        //     start: new Date("2022-11-04T04:30:00.000Z"),
        //     title: "Event 8",
        //   },
        //   {
        //     end: new Date("2022-11-04T05:30:00.000Z"),
        //     start: new Date("2022-11-04T04:30:00.000Z"),
        //     title: "Event 9",
        //   },
        //   {
        //     end: new Date("2022-11-04T07:30:00.000Z"),
        //     start: new Date("2022-11-04T05:30:00.000Z"),
        //     title: "Event 10",
        //   },
        //   {
        //     end: new Date("2022-11-04T08:00:00.000Z"),
        //     start: new Date("2022-11-04T07:00:00.000Z"),
        //     title: "Event 11",
        //   },
        //   {
        //     end: new Date("2022-11-04T08:00:00.000Z"),
        //     start: new Date("2022-11-04T07:00:00.000Z"),
        //     title: "Event 12",
        //   },
        //   {
        //     end: new Date("2022-11-04T08:00:00.000Z"),
        //     start: new Date("2022-11-04T07:00:00.000Z"),
        //     title: "Event 13",
        //   },
        //   {
        //     end: new Date("2022-11-04T08:00:00.000Z"),
        //     start: new Date("2022-11-04T07:00:00.000Z"),
        //     title: "Event 14",
        //   },
        //   {
        //     end: new Date("2022-11-04T03:00:00.000Z"),
        //     start: new Date("2022-11-04T01:30:00.000Z"),
        //     title: "Event 15",
        //   },
        //   {
        //     end: new Date("2022-11-04T12:30:00.000Z"),
        //     start: new Date("2022-11-04T11:00:00.000Z"),
        //     title: "Event 16",
        //   },
        // ]
        // onSelecting
        selectable={true}
        // components={{
        //   event: EventComponent,
        // }}
        components={{ event: EventComponent, toolbar: CustomToolbar }}
        onSelectSlot={(e) => {
          handleSelect(e);
        }}
        startAccessor="start"
        longPressThreshold={10}
        endAccessor="end"
        style={{ height: 500, margin: 50, fontFamily: "Patrick Hand" }}
        onSelectEvent={openEventClick}
        // onSelecting={openEventClick}
      />
    </div>
  );
};

function mapStateToProps({ event, events }) {
  return {
    event,
    events,
  };
}

export default connect(mapStateToProps, {
  ShowEventApi,
  closeEvent,
  ShowEventsApi,
})(MyCalendar);
