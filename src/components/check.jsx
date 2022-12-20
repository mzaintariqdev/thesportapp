import { Table } from "antd";
import styled from "styled-components";
import "antd/dist/antd.min.css";

const AntTable = styled(Table)`
  .ant-table-thead > tr {
    border: 2px solid yellow;
  }

  .ant-table-thead > tr > th {
    font-size: 16px;

    font-weight: 500 !important;

    border-bottom: 2px solid gray;
  }

  .ant-table {
    background: white;
    font-size: 19px;

    font-weight: 400;

    *:not(.ant-select *, button, .allow-background) {
      background: none !important;
    }
  }

  .ant-table-tbody > tr > td {
    padding: 10px;
    border-bottom: 2px solid gray;
  }
`;

export default AntTable;
