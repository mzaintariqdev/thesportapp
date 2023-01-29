import styled from 'styled-components';
import { useState } from 'react';
import { Select } from 'antd';
import { ResponsiveContainer, Label } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

import { ReactComponent as DropDown } from '../../../../../../assets/icons/dropdown-arrow.svg';

const { Option } = Select;
const timeVariation = ['Monthly', 'Weekly', 'Daily'];

function PieChartComp() {
  const dataCircle = [
    { name: 'Group A', value: 600 },
    { name: 'Group B', value: 100 },
    { name: 'Group C', value: 300 },
  ];
  const COLORS = ['#2ED47A', '#F7685B', '#FFB946'];

  const [variationPie, setPieVariation] = useState('Monthly');

  const handlePieChartChange = (value) => {
    setPieVariation(value);
    console.log(variationPie);
  };

  return (
    <PieWrapper>
      <TasksWrapper>
        <Deals>Tasks</Deals>
        <ShowWrapper>
          <ShowHeading>Show:</ShowHeading>
          <AntSelect
            suffixIcon={<DropDown />}
            bordered={false}
            defaultValue={timeVariation[0]}
            style={{
              width: 94,
            }}
            onChange={handlePieChartChange}
          >
            {timeVariation.map((province) => (
              <Option key={province}>{province} </Option>
            ))}
          </AntSelect>
        </ShowWrapper>
      </TasksWrapper>
      <Hr />
      <SubPieWrapper>
        <div style={{ width: '50%', height: 224 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={dataCircle}
                innerRadius="90%"
                outerRadius="100%"
                fill="#8884d8"
                dataKey="value"
              >
                {dataCircle.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label style={StyledLabel} position="center">
                  60%
                </Label>
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <TicksWrapper>
          <SubTicksWrapper>
            <Ticks borderColor="#ffb946" />
            <TickTag>Canceled</TickTag>
          </SubTicksWrapper>
          <SubTicksWrapper>
            <Ticks borderColor="#2ED47A" />
            <TickTag>Paid</TickTag>
          </SubTicksWrapper>
          <SubTicksWrapper>
            <Ticks borderColor="#F7685B" /> <TickTag>Unpaid</TickTag>
          </SubTicksWrapper>
        </TicksWrapper>
      </SubPieWrapper>
    </PieWrapper>
  );
}

const AntSelect = styled(Select)`
  .ant-select-selection-item {
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #109cf1;
  }
`;
const Ticks = styled.div`
  width: 8px;
  height: 8px;
  background: #ffffff;
  border: 2px solid ${(p) => p.borderColor};
  border-radius: 8px;
`;
const TickTag = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.01em;
  color: #192a3e;
  margin-left: 8px;
`;
const SubTicksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;
const TicksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;
const SubPieWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StyledLabel = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '56px',
  lineHeight: '84px',
  textAlign: 'center',
  fill: '#2ed47a',
};
const ShowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ShowHeading = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #6a707e;
`;

const TasksWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 16px 24px;
`;
const Deals = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #192a3e;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 16px;
  background: #ebeff2;
`;
const PieWrapper = styled.div`
  width: 445px;
  height: 344px;
  background: white;
  margin-top: 21px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default PieChartComp;
