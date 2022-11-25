import { EVENT_TYPES } from "../../actions/events";

const initialValue = [];

const EventsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case EVENT_TYPES.SHOW_EVENTS:
      return action.payload;
    case EVENT_TYPES.ADD_EVENT:
      return [...state, action.payload];
    // case "UPDATE_EVENT":
    // const renderedEvents = state.filter(event => event.id !== action.payload._id);

    // return [
    //     ...renderedEvents,
    //     action.payload
    // ]

    case EVENT_TYPES.DELETE_EVENT:
      const filteredEvents = state.filter(
        (event) => event.id !== action.payload.id
      );
      return [...filteredEvents];
    default:
      return state;
  }
};

export default EventsReducer;
