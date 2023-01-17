import { addEventApi, closeModal } from "../../Redux/actions";
import { connect } from "react-redux";

function mapStateToProps({ event, error }) {
  return {
    error,
    // event
  };
}

export default connect(mapStateToProps, { addEventApi, closeModal });
