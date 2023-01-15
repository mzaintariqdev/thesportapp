import Toolbar from "react-big-calendar/lib/Toolbar";
import styled from "styled-components";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

class CustomToolbar extends Toolbar {
  render() {
    return (
      <div className="rbc-toolbar">
        <BtnGroup className="rbc-btn-group">
          <TodayStyle
            className="rbc-btn-group"
            onClick={() => this.navigate("TODAY")}
          >
            Today
          </TodayStyle>
          <Button type="text" onClick={() => this.navigate("PREV")}>
            <LeftOutlined />
          </Button>
          <Button type="text" onClick={() => this.navigate("NEXT")}>
            <RightOutlined />
          </Button>
        </BtnGroup>
        <span className="rbc-toolbar-label">
          <button type="button" onClick={this.view.bind(null, "month")}>
            Month
          </button>
          <button type="button" onClick={this.view.bind(null, "week")}>
            Week
          </button>
          <button type="button" onClick={this.view.bind(null, "day")}>
            Day
          </button>
          {/* <button type="button" onClick={this.view.bind(null, "agenda")}>
            Agenda
          </button> */}
        </span>
        <DateStyle className="rbc-btn-group">{this.props.label}</DateStyle>
      </div>
    );
  }

  navigate = (action) => {
    this.props.onNavigate(action);
  };
}

const BtnGroup = styled.span`
  display: flex;
  align-items: center;

  button {
    border: none;

    &:focus {
      background: none;
    }
  }
`;

const DateStyle = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;

  color: #334d6e;
`;

const TodayStyle = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  cursor: pointer;
  color: #334d6e;
`;

export default CustomToolbar;
