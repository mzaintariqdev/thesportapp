import { closeEvent, ShowEventApi, ShowEventsApi } from "../../Redux/actions";
import { connect } from "react-redux";

function mapStateToProps({ event, events }) {
  return {
    event,
    events,
  };
}

export default connect(mapStateToProps, {
  ShowEventApi,
  closeEvent,
  ShowEventsApi,
});
