export const DATA_VARIATION = {
  MONTHLY: 'Monthly',
  WEEKLY: 'Weekly',
  DAILY: 'Daily',
};

const pieChartMonthly = {
  data: [
    { name: 'Paid', value: 700 },
    { name: 'UnPaid', value: 180 },
    { name: 'Cancelled', value: 120 },
  ],
  paidPercentage: '70%',
};

const pieChartWeekly = {
  data: [
    { name: 'Paid', value: 650 },
    { name: 'UnPaid', value: 150 },
    { name: 'Cancelled', value: 200 },
  ],
  paidPercentage: '65%',
};

const pieChartDaily = {
  data: [
    { name: 'Paid', value: 600 },
    { name: 'UnPaid', value: 100 },
    { name: 'Cancelled', value: 300 },
  ],
  paidPercentage: '60%',
};
export const TaskAnalyticsMock = {
  [DATA_VARIATION.MONTHLY]: pieChartMonthly,
  [DATA_VARIATION.WEEKLY]: pieChartWeekly,
  [DATA_VARIATION.DAILY]: pieChartDaily,
};

const lineChartMonthly = [
  {
    name: '1',
    data: 4000,
  },
  {
    name: '2',
    data: 3000,
  },
  {
    name: '3',
    data: 2000,
  },
  {
    name: '4',
    data: 2780,
  },
  {
    name: '5',
    data: 1890,
  },
  {
    name: '6',
    data: 2390,
  },
  {
    name: '7',
    data: 4000,
  },
  {
    name: '8',
    data: 3000,
  },
  {
    name: '9',
    data: 2000,
  },
  {
    name: '10',
    data: 2780,
  },
  {
    name: '11',
    data: 1890,
  },
  {
    name: '12',
    data: 2390,
  },
  {
    name: '13',
    data: 4000,
  },
  {
    name: '14',
    data: 3000,
  },
  {
    name: '15',
    data: 2000,
  },
  {
    name: '16',
    data: 2780,
  },
  {
    name: '17',
    data: 1890,
  },
  {
    name: '18',
    data: 2390,
  },
  {
    name: '19',
    data: 4000,
  },
  {
    name: '20',
    data: 3000,
  },
  {
    name: '21',
    data: 2000,
  },
  {
    name: '22',
    data: 2780,
  },
  {
    name: '23',
    data: 1890,
  },
  {
    name: '24',
    data: 2390,
  },
  {
    name: '25',
    data: 4000,
  },
  {
    name: '26',
    data: 3000,
  },
  {
    name: '27',
    data: 2000,
  },
  {
    name: '28',
    data: 2780,
  },
  {
    name: '29',
    data: 1890,
  },
  {
    name: '30',
    data: 2390,
  },
  {
    name: '31',
    data: 3490,
  },
];

const lineChartWeekly = [
  {
    name: '1',
    data: 4000,
  },
  {
    name: '2',
    data: 3000,
  },
  {
    name: '3',
    data: 2000,
  },
  {
    name: '4',
    data: 2780,
  },
  {
    name: '5',
    data: 1890,
  },
  {
    name: '6',
    data: 2390,
  },
  {
    name: '7',
    data: 4000,
  },
];

const lineChartDaily = [
  {
    name: '1',
    data: 4000,
  },
  {
    name: '2',
    data: 3000,
  },
  {
    name: '3',
    data: 2000,
  },
  {
    name: '4',
    data: 2780,
  },
  {
    name: '5',
    data: 1890,
  },
  {
    name: '6',
    data: 2390,
  },
  {
    name: '7',
    data: 4000,
  },
];

export const LineChartAnalyticsMock = {
  [DATA_VARIATION.MONTHLY]: lineChartMonthly,
  [DATA_VARIATION.WEEKLY]: lineChartWeekly,
  [DATA_VARIATION.DAILY]: lineChartDaily,
};

export const mockWallet = {
  earning: '$198k',
  earningPercentage: 3,
  balance: '$2.4k',
  balancePercentage: 3,
  sales: '$89k',
  salesPercentage: -3,
};

export const mockBookingListByDate = [
  {
    id: 0,
    title: 'Send benefit review by Sunday',
    status: 'completed',
    price: '300 USD',
    time: '08:00 AM',
    clientName: 'Rebecca Moore',
    clientImageLink: '',
  },
  {
    id: 1,
    title: 'Send benefit review by Monday',
    status: 'unpaid',
    price: '450 USD',
    time: '8:00 PM',
    clientName: 'James',
    clientImageLink: '',
  },
  {
    id: 2,
    title: 'Send payment by Saturday',
    status: 'completed',
    price: '800 USD',
    time: '10:00 AM',
    clientName: 'John Smith',
    clientImageLink: '',
  },
];

export const mockMoreBookingListByDate = [
  {
    id: 0,
    title: 'Send benefit review by Sunday',
    status: 'completed',
    price: '300 USD',
    time: '08:00 AM',
    clientName: 'Rebecca Moore',
    clientImageLink: '',
  },
  {
    id: 1,
    title: 'Send benefit review by Monday',
    status: 'unpaid',
    price: '450 USD',
    time: '8:00 PM',
    clientName: 'James',
    clientImageLink: '',
  },
  {
    id: 2,
    title: 'Send payment by Saturday',
    status: 'completed',
    price: '800 USD',
    time: '10:00 AM',
    clientName: 'John Smith',
    clientImageLink: '',
  },
  {
    id: 3,
    title: 'Send benefit review by Sunday',
    status: 'completed',
    price: '300 USD',
    time: '08:00 AM',
    clientName: 'Rebecca Moore',
    clientImageLink: '',
  },
  {
    id: 4,
    title: 'Send benefit review by Monday',
    status: 'unpaid',
    price: '450 USD',
    time: '8:00 PM',
    clientName: 'James',
    clientImageLink: '',
  },
];
