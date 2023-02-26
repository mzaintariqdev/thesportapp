import { createSelector } from 'reselect';

const selectDashboard = (state) => state.dashboardReducer;

export const selectWalletData = createSelector(
  selectDashboard,
  (state) => state.wallet
);

export const selectIsBookingListByDateLoading = createSelector(
  selectDashboard,
  (state) => state.isBookingListByDateLoading
);

export const selectIsMoreBookingListByDateLoading = createSelector(
  selectDashboard,
  (state) => state.isMoreBookingListByDateLoading
);

export const selectBookingListByDate = createSelector(
  selectDashboard,
  (state) => state.bookingListByDate
);

export const selectIsWalletLoading = createSelector(
  selectDashboard,
  (state) => state.isWalletLoading
);

export const selectTaskAnalytics = createSelector(
  selectDashboard,
  (state) => state.taskAnalytics
);

export const selectIsTaskAnalyticsLoading = createSelector(
  selectDashboard,
  (state) => state.isTaskAnalyticsLoading
);

export const selectLineChartAnalytics = createSelector(
  selectDashboard,
  (state) => state.lineChartAnalytics
);

export const selectIsLineChartAnalyticsLoading = createSelector(
  selectDashboard,
  (state) => state.isLineChartAnalyticsLoading
);
