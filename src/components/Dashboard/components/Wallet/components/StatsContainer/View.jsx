import { ArrowDownOutlined } from '@ant-design/icons';
import { ArrowUpOutlined } from '@ant-design/icons/lib/icons';
import classNames from 'classnames';

import RenderIf from '../../../../../components/RenderIf';

import './StatsContainer.scss';

function StatsContainer({ StatIcon, heading, balance, percentage }) {
  return (
    <div className="stat-container">
      {StatIcon}
      <div className="stat-container__sub-wrapper">
        <p className="stat-container__sub-wrapper-heading">{heading}</p>
        <p className="stat-container__sub-wrapper-balance">{balance}</p>
        <div className="stat-container__sub-wrapper-progress-container">
          <RenderIf condition={percentage >= 0}>
            <ArrowUpOutlined className="positive-icon" />
          </RenderIf>
          <RenderIf condition={percentage < 0}>
            <ArrowDownOutlined className="negative-icon" />
          </RenderIf>
          <p
            className={classNames(
              'stat-container__sub-wrapper-progress-container__percentage',
              percentage < 0 ? 'negative' : 'positive'
            )}
          >
            {percentage}%
          </p>
          <p className="stat-container__sub-wrapper-progress-container__month">
            this month
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsContainer;
