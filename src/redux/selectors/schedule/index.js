import { createSelector } from "reselect";

const selectSchedule = (state) => state.scheduleReducer;

export const selectBookings = createSelector(
  selectSchedule,
  (state) => state.bookings
);

export const selectIsScheduleLoading = createSelector(
  selectSchedule,
  (state) => state.isScheduleLoading
);

export const selectAddBookingDefaultValue = createSelector(
  selectSchedule,
  (state) => state.addBookingFormDefault
);

export const selectIsAddModalOpen = createSelector(
  selectSchedule,
  (state) => state.isAddModalOpen
);

export const selectIsModalLoading = createSelector(
  selectSchedule,
  (state) => state.isModalLoading
);

export const selectIsEditModalOpen = createSelector(
  selectSchedule,
  (state) => state.isEditModalOpen
);
