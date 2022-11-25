import { EVENT_TYPES } from "../../actions/events";
import { MODAL_TYPES } from "../../actions/modal";

const initialValue = {
  id: "",
  start: "",
  end: "",
  describe: "",
  status: "",
  client: "",
};

const EventReducer = (state = initialValue, action) => {
  switch (action.type) {
    case EVENT_TYPES.SHOW_EVENT:
      console.log("event as appearing in the reduce: ", action.payload);
      return action.payload;

    // case "UPDATE_EVENT":
    // return action.payload

    case EVENT_TYPES.DELETE_EVENT:
      return initialValue;
    case MODAL_TYPES.CLOSE_EVENT:
      console.log("event is closed");
      return initialValue;
    default:
      return state;
  }
};

export default EventReducer;
