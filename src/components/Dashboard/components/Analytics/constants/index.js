import { DATA_VARIATION } from '../../../../../utils/mocks/mockDashboard';

export const dataVariation = ['Monthly', 'Weekly', 'Daily'];
export const PieChartColors = ['#2ED47A', '#F7685B', '#FFB946'];

export const StyledLabel = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '56px',
  lineHeight: '84px',
  textAlign: 'center',
  fill: '#2ed47a',
};

export const SelectVariationOptions = [
  {
    value: DATA_VARIATION.DAILY,
    label: DATA_VARIATION.DAILY,
  },
  {
    value: DATA_VARIATION.WEEKLY,
    label: DATA_VARIATION.WEEKLY,
  },
  {
    value: DATA_VARIATION.MONTHLY,
    label: DATA_VARIATION.MONTHLY,
  },
];

export const StyledAxis = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  letterSpacing: '0.01em',
  color: '#4c5862',
};
