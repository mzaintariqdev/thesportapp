import {
  LineChartAnalyticsMock,
  TaskAnalyticsMock,
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
