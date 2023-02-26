export const types = {
  GET_TASK_ANALYTICS: 'GET_TASK_ANALYTICS',
  SET_TASK_ANALYTICS: 'SET_TASK_ANALYTICS',
  SET_IS_WALLET_LOADING: 'SET_IS_WALLET_LOADING',
  GET_WALLET_DATA: 'GET_WALLET_DATA',
  SET_WALLET_DATA: 'SET_WALLET_DATA',
  SET_IS_TASK_ANALYTICS_LOADING: 'SET_IS_TASK_ANALYTICS_LOADING',
  GET_LINE_CHART_ANALYTICS: 'GET_LINE_CHART_ANALYTICS',
  SET_LINE_CHART_ANALYTICS: 'SET_LINE_CHART_ANALYTICS',
  SET_IS_LINE_CHART_ANALYTICS_LOADING: 'SET_IS_LINE_CHART_ANALYTICS_LOADING',
  SET_BOOKING_LIST_BY_DATE: 'SET_BOOKING_LIST_BY_DATE',
  GET_BOOKING_LIST_BY_DATE: 'GET_BOOKING_LIST_BY_DATE',
  SET_BOOKING_LIST_LOADING: 'SET_BOOKING_LIST_LOADING',
  GET_MORE_BOOKING_LIST_LOADING: 'GET_MORE_BOOKING_LIST_LOADING',
  SET_MORE_BOOKING_LIST_LOADING: 'SET_MORE_BOOKING_LIST_LOADING',
};

export const setMoreBookingListByDateLoading = (payload) => ({
  type: types.SET_MORE_BOOKING_LIST_LOADING,
  payload,
});

export const getMoreBookingListByDate = (payload) => ({
  type: types.GET_MORE_BOOKING_LIST_LOADING,
  payload,
});

export const setBookingListByDate = (payload) => ({
  type: types.SET_BOOKING_LIST_BY_DATE,
  payload,
});

export const getBookingListByDate = (payload) => ({
  type: types.GET_BOOKING_LIST_BY_DATE,
  payload,
});

export const setBookingListByDateLoading = (payload) => ({
  type: types.SET_BOOKING_LIST_LOADING,
  payload,
});

export const setWalletLoading = (payload) => ({
  type: types.SET_IS_WALLET_LOADING,
  payload,
});

export const getWalletData = (payload) => ({
  type: types.GET_WALLET_DATA,
  payload,
});

export const setWalletData = (payload) => ({
  type: types.SET_WALLET_DATA,
  payload,
});

export const getTaskAnalytics = (payload) => ({
  type: types.GET_TASK_ANALYTICS,
  payload,
});

export const setTaskAnalytics = (payload) => ({
  type: types.SET_TASK_ANALYTICS,
  payload,
});

export const setIsTaskAnalyticsLoading = (payload) => ({
  type: types.SET_IS_TASK_ANALYTICS_LOADING,
  payload,
});

export const getLineChartAnalytics = (payload) => ({
  type: types.GET_LINE_CHART_ANALYTICS,
  payload,
});

export const setLineChartAnalytics = (payload) => ({
  type: types.SET_LINE_CHART_ANALYTICS,
  payload,
});

export const setIsLineChartAnalyticsLoading = (payload) => ({
  type: types.SET_IS_LINE_CHART_ANALYTICS_LOADING,
  payload,
});
