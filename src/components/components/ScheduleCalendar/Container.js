// import { closeEvent, ShowEventApi, ShowEventsApi } from "../../Redux/actions";
// import { connect } from "react-redux";

// function mapStateToProps({ event, events }) {
//   return {
//     event,
//     events,
//   };
// }

// export default connect(mapStateToProps, {
//   ShowEventApi,
//   closeEvent,
//   ShowEventsApi,
// });

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addBooking } from "../../../redux/actions/schedule";
import { selectBookings } from "../../../redux/selectors/schedule";

const mapStateToProps = (state) => ({
  bookings: selectBookings(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addBooking,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
