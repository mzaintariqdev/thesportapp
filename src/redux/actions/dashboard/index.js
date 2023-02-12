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
};

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
