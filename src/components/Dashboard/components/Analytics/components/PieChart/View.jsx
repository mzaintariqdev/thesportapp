import { Select, Spin } from 'antd';
import { ResponsiveContainer, Label } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

import { ReactComponent as DropDown } from '../../../../../../assets/icons/dropdown-arrow.svg';
import { DATA_VARIATION } from '../../../../../../utils/mocks/mockDashboard';
import {
  PieChartColors,
  SelectVariationOptions,
  StyledLabel,
} from '../../constants';

import './PieChart.scss';

function PieChartComp(props) {
  const { isLoading, taskData, actions } = props;

  const handlePieChartChange = (value) => {
    actions.getTaskAnalytics({ status: value });
  };

  return (
    <Spin spinning={isLoading}>
      <div className="pie-chart-wrapper">
        <div className="pie-chart-wrapper__header">
          <p className="pie-chart-wrapper__header-task-heading">Tasks</p>
          <div className="pie-chart-wrapper__header-select-wrap">
            <p className="pie-chart-wrapper__header-select-wrap__heading">
              Show:
            </p>
            <Select
              suffixIcon={<DropDown />}
              bordered={false}
              defaultValue={DATA_VARIATION.DAILY}
              style={{
                width: 94,
              }}
              onChange={handlePieChartChange}
              options={SelectVariationOptions}
            />
          </div>
        </div>
        <div className="pie-chart-wrapper__body">
          <div className="pie-chart-wrapper__body-pie-chart">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={taskData?.data}
                  innerRadius="90%"
                  outerRadius="100%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {taskData?.data?.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PieChartColors[index % PieChartColors.length]}
                    />
                  ))}
                  <Label style={StyledLabel} position="center">
                    {taskData?.paidPercentage}
                  </Label>
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-chart-wrapper__body-options">
            <div className="pie-chart-wrapper__body-options__wrapper">
              <div className="pie-chart-wrapper__body-options__wrapper-canceled-option" />
              <p className="pie-chart-wrapper__body-options__wrapper-tag">
                Canceled
              </p>
            </div>
            <div className="pie-chart-wrapper__body-options__wrapper">
              <div className="pie-chart-wrapper__body-options__wrapper-paid-option" />
              <p className="pie-chart-wrapper__body-options__wrapper-tag">
                Paid
              </p>
            </div>
            <div className="pie-chart-wrapper__body-options__wrapper">
              <div
                className="pie-chart-wrapper__body-options__wrapper-unpaid-option"
                borderColor="#F7685B"
              />
              <p className="pie-chart-wrapper__body-options__wrapper-tag">
                Unpaid
              </p>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
}

export default PieChartComp;
