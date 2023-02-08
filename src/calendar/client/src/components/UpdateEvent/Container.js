import { ShowEventsApi, updateEventApi } from "../../Redux/actions/events";
import { connect } from "react-redux";

function mapStateToProps({ event, error }) {
  return {
    event,
    error,
  };
}

export default connect(mapStateToProps, { updateEventApi, ShowEventsApi });
