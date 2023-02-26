import { ReactComponent as TopAnalyticsOne } from '../../../../assets/icons/top-analytics-one.svg';
import { ReactComponent as TopAnalyticsTwo } from '../../../../assets/icons/top-analytics-two.svg';
import { ReactComponent as TopAnalyticsThree } from '../../../../assets/icons/top-analytics-three.svg';
import StatsContainer from './components/StatsContainer';
import { Spin } from 'antd';

import './Wallet.scss';

function Wallet(props) {
  const { isLoading, walletData } = props;

  return (
    <div className="wallet-section">
      <Spin spinning={isLoading}>
        <StatsContainer
          StatIcon={<TopAnalyticsOne />}
          heading="Earning"
          balance={walletData?.earning}
          percentage={walletData?.earningPercentage}
        />
      </Spin>
      <div className="divider" />
      <Spin spinning={isLoading}>
        <StatsContainer
          StatIcon={<TopAnalyticsTwo />}
          heading="Balance"
          balance={walletData?.balance}
          percentage={walletData?.balancePercentage}
        />
      </Spin>
      <div className="divider" />
      <Spin spinning={isLoading}>
        <StatsContainer
          StatIcon={<TopAnalyticsThree />}
          heading="Total Sales"
          balance={walletData?.sales}
          percentage={walletData?.salesPercentage}
        />
      </Spin>
    </div>
  );
}

export default Wallet;
