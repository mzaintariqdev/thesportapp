import Toolbar from 'react-big-calendar/lib/Toolbar';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import './CustomToolBar.scss';
class CustomToolbar extends Toolbar {
  render() {
    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <span
            className="rbc-btn-group today-style"
            onClick={() => this.navigate('TODAY')}
          >
            Today
          </span>
          <Button type="text" onClick={() => this.navigate('PREV')}>
            <LeftOutlined />
          </Button>
          <Button type="text" onClick={() => this.navigate('NEXT')}>
            <RightOutlined />
          </Button>
        </span>
        <span className="rbc-toolbar-label">
          <button type="button" onClick={this.view.bind(null, 'month')}>
            Month
          </button>
          <button type="button" onClick={this.view.bind(null, 'week')}>
            Week
          </button>
          <button type="button" onClick={this.view.bind(null, 'day')}>
            Day
          </button>
          {/* <button type="button" onClick={this.view.bind(null, "agenda")}>
            Agenda
          </button> */}
        </span>
        <span className="rbc-btn-group date-style">{this.props.label}</span>
      </div>
    );
  }

  navigate = (action) => {
    this.props.onNavigate(action);
  };
}

export default CustomToolbar;
