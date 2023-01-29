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
import { selectBookings } from "../../../redux/selectors/schedule";
import { addBookingDate, setBookingId } from "../../../redux/actions/schedule";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  bookings: selectBookings(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addBookingDate,
      setBookingId,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
