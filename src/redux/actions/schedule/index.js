export const types = {
  GET_SCHEDULE_BOOKINGS: "GET_SCHEDULE_BOOKINGS",
  SET_SCHEDULE_BOOKINGS: "SET_SCHEDULE_BOOKINGS",
  ADD_BOOKING: "ADD_BOOKING",
  SET_BOOKINGS_ON_ADD_BOOKING: "SET_BOOKINGS_ON_ADD_BOOKING",
  SET_IS_SCHEDULE_LOADING: "SET_IS_SCHEDULE_LOADING",
};

export const getScheduleBookings = (payload) => ({
  type: types.GET_SCHEDULE_BOOKINGS,
  payload,
});

export const setScheduleBookings = (payload) => ({
  type: types.SET_SCHEDULE_BOOKINGS,
  payload,
});

export const setScheduleBookingsOnAddBooking = (payload) => ({
  type: types.SET_BOOKINGS_ON_ADD_BOOKING,
  payload,
});

export const addBooking = (payload) => ({
  type: types.ADD_BOOKING,
  payload,
});

export const setIsScheduleLoading = (payload) => ({
  type: types.SET_IS_SCHEDULE_LOADING,
  payload,
});
