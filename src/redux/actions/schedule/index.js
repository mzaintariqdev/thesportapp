export const types = {
  GET_SCHEDULE_BOOKINGS: "GET_SCHEDULE_BOOKINGS",
  SET_SCHEDULE_BOOKINGS: "SET_SCHEDULE_BOOKINGS",
  ADD_BOOKING: "ADD_BOOKING",
  SET_BOOKINGS_ON_ADD_BOOKING: "SET_BOOKINGS_ON_ADD_BOOKING",
  SET_IS_SCHEDULE_LOADING: "SET_IS_SCHEDULE_LOADING",
  SET_IS_MODAL_LOADING: "SET_IS_MODAL_LOADING",
  SET_BOOKING_DATE: "SET_BOOKING_DATE",
  SET_ADD_BOOKING_STATE: "SET_ADD_BOOKING_STATE",
  SET_IS_ADD_MODAL_OPEN: "SET_IS_ADD_MODAL_OPEN",
  SET_IS_EDIT_MODAL_OPEN: "SET_IS_EDIT_MODAL_OPEN",
  ADD_BOOKING_DATE: "ADD_BOOKING_DATE",
  SET_BOOKING_ID: "SET_BOOKING_ID",
  GET_BOOKING_BY_ID: "GET_BOOKING_BY_ID",
};

export const setBookingId = (payload) => ({
  type: types.SET_BOOKING_ID,
  payload,
});

export const getBookingById = (payload) => ({
  type: types.GET_BOOKING_BY_ID,
  payload,
});

export const setIsModalLoading = (payload) => ({
  type: types.SET_IS_MODAL_LOADING,
  payload,
});

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

export const addBookingDate = (payload) => ({
  type: types.ADD_BOOKING_DATE,
  payload,
});

export const setBookingDate = (payload) => ({
  type: types.SET_BOOKING_DATE,
  payload,
});

export const setAddBookingState = () => ({
  type: types.SET_ADD_BOOKING_STATE,
});

export const setIsAddModalOpen = (payload) => ({
  type: types.SET_IS_ADD_MODAL_OPEN,
  payload,
});

export const setIsEditModalOpen = (payload) => ({
  type: types.SET_IS_EDIT_MODAL_OPEN,
  payload,
});
