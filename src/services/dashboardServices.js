import {
  LineChartAnalyticsMock,
  TaskAnalyticsMock,
  mockBookingListByDate,
  mockMoreBookingListByDate,
  mockWallet,
} from '../utils/mocks/mockDashboard';
import { sleep } from './utils/helpers';

export const getTaskAnalyticsApi = async (status) => {
  const data = TaskAnalyticsMock[status];

  await sleep(2000);
  return {
    data,
    error: false,
    status: 200,
  };
};

export const getBookingListByDateApi = async (date) => {
  const data = mockBookingListByDate;

  await sleep(2000);
  return {
    data,
    error: false,
    status: 200,
    date,
  };
};

export const getMoreBookingListByDateApi = async (date) => {
  const data = mockMoreBookingListByDate;

  await sleep(2000);
  return {
    data,
    error: false,
    status: 200,
    date,
  };
};

export const getLineChartAnalyticsApi = async (status) => {
  const data = LineChartAnalyticsMock[status];

  await sleep(2000);
  return {
    data,
    error: false,
    status: 200,
  };
};

export const getWalletDataApi = async () => {
  await sleep(2000);
  return {
    data: mockWallet,
    error: false,
    status: 200,
  };
};
