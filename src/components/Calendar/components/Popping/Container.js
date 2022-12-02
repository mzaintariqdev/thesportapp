import { connect } from "react-redux";
import { deleteEventApi, closeEvent } from "../../Redux/actions";

function mapStateToProps({ event }) {
  return {
    event,
    //  modalStatus
  };
}

export default connect(mapStateToProps, { deleteEventApi, closeEvent });
