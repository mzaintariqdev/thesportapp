import Toolbar from "react-big-calendar/lib/Toolbar";

class CustomToolbar extends Toolbar {
  render() {
    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate("TODAY")}>
            today
          </button>
          <button type="button" onClick={() => this.navigate("PREV")}>
            back
          </button>
          <button type="button" onClick={() => this.navigate("NEXT")}>
            next
          </button>
        </span>
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
        <span className="rbc-btn-group">{this.props.label}</span>
      </div>
    );
  }

  navigate = (action) => {
    this.props.onNavigate(action);
  };
}

export default CustomToolbar;
