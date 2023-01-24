import produce from "immer";

import { types } from "../../actions/schedule";
import { scheduleDefaultState } from "../../utils/defaultStates";

const defaultState = scheduleDefaultState.default;

const handleSetBookings = (state, payload) => {
  state.bookings = payload.bookings;
  return state;
};

const handleSetBookingsOnAddBooking = (state, payload) => {
  const newBooking = {
    id: state.bookings.length,
    clientName: payload.data.clientName,
    recurrence: payload.data.recurrence,
    resource: payload.data.resource,
    start: payload.data.start,
    end: payload.data.end,
    date: payload.data.date,
    status: payload.data.status,
  };
  state.bookings.push(newBooking);

  return state;
};

const handleSetScheduleLoading = (state, payload) => {
  state.isScheduleLoading = payload.isLoading;
  return state;
};

const handleSetIsModalLoading = (state, payload) => {
  state.isModalLoading = payload.isModalLoading;
  return state;
};

const handleSetBookingDate = (state, payload) => {
  state.addBookingFormDefault.date = payload.date;
  return state;
};

const handleSetAddBookingState = (state) => {
  state.addBookingFormDefault = {
    client: "",
    resource: "",
    date: "",
    time: "",
    recurrence: "",
  };
  return state;
};

const handleSetAddModalOpen = (state, payload) => {
  state.isAddModalOpen = payload.open;
  return state;
};

const handleSetEditModalOpen = (state, payload) => {
  state.isEditModalOpen = payload.open;
  return state;
};

export default produce((state = defaultState, action) => {
  switch (action.type) {
    case types.SET_SCHEDULE_BOOKINGS:
      return handleSetBookings(state, action.payload);
    case types.SET_BOOKINGS_ON_ADD_BOOKING:
      return handleSetBookingsOnAddBooking(state, action.payload);
    case types.SET_IS_SCHEDULE_LOADING:
      return handleSetScheduleLoading(state, action.payload);
    case types.SET_BOOKING_DATE:
      return handleSetBookingDate(state, action.payload);
    case types.SET_ADD_BOOKING_STATE:
      return handleSetAddBookingState(state);
    case types.SET_IS_ADD_MODAL_OPEN:
      return handleSetAddModalOpen(state, action.payload);
    case types.SET_IS_EDIT_MODAL_OPEN:
      return handleSetEditModalOpen(state, action.payload);
    case types.SET_IS_MODAL_LOADING:
      return handleSetIsModalLoading(state, action.payload);
    default:
      return state;
  }
});
