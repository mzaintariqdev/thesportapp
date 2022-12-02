import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

export const eventStyleGetter = function (event, start, end, isSelected) {
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

export const locales = {
  "en-US": enUS,
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
