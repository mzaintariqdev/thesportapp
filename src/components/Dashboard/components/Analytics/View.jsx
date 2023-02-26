import LineChart from './components/LineChart';
import PieChartComp from './components/PieChart';

import './Analytics.scss';

function Analytics() {
  return (
    <div className="analytics-section">
      <LineChart />
      <PieChartComp />
    </div>
  );
}

export default Analytics;
