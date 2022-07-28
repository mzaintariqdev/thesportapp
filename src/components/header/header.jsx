import { Input } from "antd";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Notification } from "../../assets/icons/notificationBell.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/question-circle.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

function Header() {
  return (
    <Wrapper>
      <LeftHeader>
        <SearchIcon
          style={{ width: "30px", marginRight: "10px", cursor: "pointer" }}
        />
        <AntInput placeholder="Search" />
      </LeftHeader>

      <RightHeader>
        <HelpIcon style={{ cursor: "pointer" }} />
        <Notification style={{ marginLeft: "11px", cursor: "pointer" }} />
      </RightHeader>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 8px rgba(0.1, 0, 0, 0.1);
`;
const RightHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 36px;
`;
const LeftHeader = styled.div`
  display: flex;
  margin-left: 36px;
  flex-direction: row;
  align-items: center;
`;
const AntInput = styled(Input)`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 12px;
  color: #90a0b7;
  border: none;
`;
export default Header;
