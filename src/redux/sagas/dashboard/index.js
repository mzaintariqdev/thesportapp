import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  types,
  setTaskAnalytics,
  setIsLineChartAnalyticsLoading,
  setLineChartAnalytics,
  setWalletLoading,
  setWalletData,
} from '../../actions/dashboard';

import showNotifications from '../../../services/utils/showNotification';
import { setIsTaskAnalyticsLoading } from '../../actions/dashboard';
import {
  getLineChartAnalyticsApi,
  getTaskAnalyticsApi,
  getWalletDataApi,
} from '../../../services/dashboardServices';

function* handleGetTaskAnalytics(action) {
  const { status } = action.payload;

  yield put(setIsTaskAnalyticsLoading({ isLoading: true }));

  const { data, error } = yield call(getTaskAnalyticsApi, status);

  if (error) {
    showNotifications('error');
  } else {
    yield put(setTaskAnalytics({ data }));
  }
  yield put(setIsTaskAnalyticsLoading({ isLoading: false }));
}

function* handleGetLineChartAnalytics(action) {
  const { status } = action.payload;

  yield put(setIsLineChartAnalyticsLoading({ isLoading: true }));

  const { data, error } = yield call(getLineChartAnalyticsApi, status);

  if (error) {
    showNotifications('error');
  } else {
    yield put(setLineChartAnalytics({ data }));
  }
  yield put(setIsLineChartAnalyticsLoading({ isLoading: false }));
}

function* handleGetWalletData() {
  yield put(setWalletLoading({ isLoading: true }));

  const { data, error } = yield call(getWalletDataApi);

  if (error) {
    showNotifications('Unable to fetch data');
  } else {
    yield put(setWalletData({ data }));
  }
  yield put(setWalletLoading({ isLoading: false }));
}

export default function* dashboardSagas() {
  yield all([takeLatest(types.GET_TASK_ANALYTICS, handleGetTaskAnalytics)]);
  yield all([takeLatest(types.GET_WALLET_DATA, handleGetWalletData)]);
  yield all([
    takeLatest(types.GET_LINE_CHART_ANALYTICS, handleGetLineChartAnalytics),
  ]);
}
