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
