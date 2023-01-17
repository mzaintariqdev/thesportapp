import produce from "immer";

import { types } from "../../actions/schedule";
import { scheduleDefaultState } from "../../utils/defaultStates";

const defaultState = scheduleDefaultState.default;

const handleSetBookings = (state, payload) => {
  state.bookings = payload.bookings;
  return state;
};

const handleSetBookingsOnAddBooking = (state, payload) => {
  const data = {
    id: state.bookings.length,
    ...payload,
  };
  state.bookings.push(data);
  return state;
};

const handleSetScheduleLoading = (state, payload) => {
  state.isScheduleLoading = payload.isLoading;
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
    default:
      return state;
  }
});
