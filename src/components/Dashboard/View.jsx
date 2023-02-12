import Analytics from './components/Analytics';
import Wallet from './components/Wallet';
import DashboardWeeklyCalender from './components/DashboardWeeklyCalender';
import { useEffect } from 'react';
import { DATA_VARIATION } from '../../utils/mocks/mockDashboard';

import './Dashboard.scss';

function DashBoard(props) {
  const { actions } = props;

  useEffect(() => {
    actions.getTaskAnalytics({ status: DATA_VARIATION.DAILY });
    actions.getLineChartAnalytics({ status: DATA_VARIATION.DAILY });
    actions.getWalletData();
  }, []);

  return (
    <div className="dashboard-section">
      <Wallet />
      <div className="dashboard-section__sub-wrap">
        <DashboardWeeklyCalender />
        <Analytics />
      </div>
    </div>
  );
}

export default DashBoard;
