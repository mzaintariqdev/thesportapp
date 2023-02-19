export const dashboardDefaultState = {
  taskAnalytics: {},
  lineChartAnalytics: [],
  isTaskAnalyticsLoading: false,
  isLineChartAnalyticsLoading: false,
  isWalletLoading: false,
  isBookingListByDateLoading: false,
  isMoreBookingListByDateLoading: false,
  bookingListByDate: [],
  wallet: {
    earning: '',
    earningPercentage: '',
    balance: '',
    balancePercentage: '',
    sales: '',
    salesPercentage: '',
  },
};

export default dashboardDefaultState;
