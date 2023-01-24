import { bindActionCreators } from "redux";
import {
  addBooking,
  setAddBookingState,
  setIsAddModalOpen,
} from "../../../../../redux/actions/schedule";
import { connect } from "react-redux";
import {
  selectAddBookingDefaultValue,
  selectIsModalLoading,
  selectIsAddModalOpen,
} from "../../../../../redux/selectors/schedule";

const mapStateToProps = (state) => ({
  defaultValue: selectAddBookingDefaultValue(state),
  isModalOpen: selectIsAddModalOpen(state),
  isModalLoading: selectIsModalLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addBooking,
      setAddBookingState,
      setIsAddModalOpen,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
