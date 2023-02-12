import { Select, Spin } from 'antd';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import { ReactComponent as DropDown } from '../../../../../../assets/icons/dropdown-arrow.svg';
import { DATA_VARIATION } from '../../../../../../utils/mocks/mockDashboard';
import { SelectVariationOptions, StyledAxis } from '../../constants';

import './LineChart.scss';

function LineChart(props) {
  const { isLoading, lineChartData, actions } = props;

  const handleLineChartChange = (value) => {
    actions.getLineChartAnalytics({ status: value });
  };

  return (
    <Spin spinning={isLoading}>
      <div className="line-chart">
        <div className="line-chart-wrap">
          <div className="line-chart-wrap__header">
            <p className="line-chart-wrap__header-task-heading">Deals</p>
            <div className="line-chart-wrap__header-select-wrap">
              <p className="line-chart-wrap__header-select-wrap__heading">
                Show:
              </p>
              <Select
                suffixIcon={<DropDown />}
                bordered={false}
                defaultValue={DATA_VARIATION.DAILY}
                style={{
                  width: 94,
                }}
                onChange={handleLineChartChange}
                options={SelectVariationOptions}
              />
            </div>
          </div>
          <div className="line-chart-wrap__body">
            <div className="line-chart-wrap__body-closed-deal">
              <p className="tool-tip" />
              <p className="line-chart-wrap__body-closed-deal__heading">
                Closed deals
              </p>
            </div>
            <AreaChart width={420} height={222} data={lineChartData}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0.43%" stopColor="#109CF1" stopOpacity={0.2} />
                  <stop offset="99.57%" stopColor="#109CF1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                tickLine={false}
                axisLine={false}
                dataKey="name"
                style={StyledAxis}
                ticks={['1', '16', lineChartData?.length]}
              />
              <YAxis style={StyledAxis} axisLine={false} tickLine={false} />
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="data"
                stroke="#109CF1"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </Spin>
  );
}

export default LineChart;
