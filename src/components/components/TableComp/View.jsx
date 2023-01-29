import React from "react";
import { Table } from "antd";
import styled from "styled-components";

const TableComp = (props) => <StyledTable {...props} />;

const StyledTable = styled(Table)`
  margin-left: 36px;
  margin-top: 24px;
  padding-bottom: 12px;
  height: auto;
  max-height: 697px;
  min-width: 1110px;
  max-width: 1110px;
  width: auto;
  background: white;
  filter: drop-shadow(0px 6px 18px rgba(0, 0, 0, 0.06));
  display: flex;
  flex-direction: column;
  align-items: center;

  .ant-spin-nested-loading {
    width: 100%;
  }

  .ant-table-cell {
    &:first-child {
      padding-left: 59px;
    }
  }

  .ant-table-thead {
    width: 100%;
    height: 48px;
    border-bottom: 1px solid #ebeff2;
    opacity: 0.5;

    .ant-table-cell {
      font-family: ${(p) => p.theme.font.family};
      font-weight: ${(p) => p.theme.font.weight.semiBold};
      font-size: 13px;
      letter-spacing: 0.01em;
      color: ${(p) => p.theme.colors.assetGray2};
    }
  }
  .ant-table-tbody {
    .ant-table-row {
      border-bottom: 1px solid #ebeff2;
      min-height: 64px;
      height: auto;
      &:hover,
      :active,
      :focus {
        background: #ffffff;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      }
      cursor: pointer;

      .ant-table-cell {
        height: auto;
        font-family: "Poppins";
        font-weight: 400;
        font-size: 13px;
        letter-spacing: 0.01em;
        color: #707683;
      }
    }
  }
`;
export default TableComp;
