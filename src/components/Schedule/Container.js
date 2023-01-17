import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getScheduleBookings } from "../../redux/actions/schedule";
import { selectIsScheduleLoading } from "../../redux/selectors/schedule";

const mapStateToProps = (state) => ({
  isScheduleLoading: selectIsScheduleLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getScheduleBookings,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
