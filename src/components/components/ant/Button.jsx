import { Button } from "antd";
import styled from "styled-components";

const AntButton = styled(Button)`
  font-size: 16px;
  background: ${(p) => p.theme.colors.assetBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(p) => p.theme.font.family};

  &.ant-btn-primary {
    background: ${(p) => p.theme.colors.assetBlue};
    color: ${(p) => p.theme.colors.assetWhite};
    font-weight: ${(p) => p.theme.font.weight.semiBold};
    padding: 16px;
    height: auto;
    width: ${(p) => p.width || "40%"};
    &:hover,
    &:active,
    &:focus {
      cursor: pointer;
    }
    border: none;
  }
  &.ant-btn-secondary {
    background: ${(p) => p.theme.colors.assetWhite};
    border: none;
    color: ${(p) => p.theme.colors.assetBlue};
    font-weight: ${(p) => p.theme.font.weight.semiBold};
    padding: 16px;
    height: auto;
    width: ${(p) => p.width || "40%"};
    &:hover,
    &:active,
    &:focus {
      cursor: pointer;
    }
  }
  &.ant-btn-dashed {
    padding: 16px;
    height: auto;
    width: ${(p) => p.width || "100%"};
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};

    background: none !important;

    &:hover,
    &:active,
    &:focus {
      background: none !important;
    }
  }
`;

export default AntButton;
