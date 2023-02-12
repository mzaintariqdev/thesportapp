import produce from 'immer';

import { types } from '../../actions/dashboard';
import { dashboardDefaultState } from '../../utils/defaultStates';

const defaultState = dashboardDefaultState.default;

const handleSetTaskAnalytics = (state, payload) => {
  state.taskAnalytics = payload.data;
  return state;
};

const handleSetIsTaskAnalyticsLoading = (state, payload) => {
  state.isTaskAnalyticsLoading = payload.isLoading;
  return state;
};

const handleSetLineChartAnalytics = (state, payload) => {
  state.lineChartAnalytics = payload.data;
  return state;
};

const handleSetIsLineChartAnalyticsLoading = (state, payload) => {
  state.isLineChartAnalyticsLoading = payload.isLoading;
  return state;
};

const handleSetWalletData = (state, payload) => {
  state.wallet = payload.data;
  return state;
};

const handleSetIsWalletLoading = (state, payload) => {
  state.isWalletLoading = payload.isLoading;
  return state;
};

const handleSetIsBookingListLoading = (state, payload) => {
  state.isBookingListByDateLoading = payload.isLoading;
  return state;
};

const handleSetBookingListByDate = (state, payload) => {
  state.bookingListByDate = payload.data;
  return state;
};

export default produce((state = defaultState, action) => {
  switch (action.type) {
    case types.SET_BOOKING_LIST_BY_DATE:
      return handleSetBookingListByDate(state, action.payload);
    case types.SET_BOOKING_LIST_LOADING:
      return handleSetIsBookingListLoading(state, action.payload);
    case types.SET_IS_WALLET_LOADING:
      return handleSetIsWalletLoading(state, action.payload);
    case types.SET_WALLET_DATA:
      return handleSetWalletData(state, action.payload);
    case types.SET_LINE_CHART_ANALYTICS:
      return handleSetLineChartAnalytics(state, action.payload);
    case types.SET_IS_LINE_CHART_ANALYTICS_LOADING:
      return handleSetIsLineChartAnalyticsLoading(state, action.payload);
    case types.SET_TASK_ANALYTICS:
      return handleSetTaskAnalytics(state, action.payload);
    case types.SET_IS_TASK_ANALYTICS_LOADING:
      return handleSetIsTaskAnalyticsLoading(state, action.payload);
    default:
      return state;
  }
});
