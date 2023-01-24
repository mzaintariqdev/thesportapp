import { bindActionCreators } from "redux";
import {
  addBooking,
  setAddBookingState,
  setIsEditModalOpen,
} from "../../../../../redux/actions/schedule";
import { connect } from "react-redux";
import {
  selectAddBookingDefaultValue,
  selectIsModalLoading,
  selectIsEditModalOpen,
} from "../../../../../redux/selectors/schedule";

const mapStateToProps = (state) => ({
  defaultValue: selectAddBookingDefaultValue(state),
  isModalOpen: selectIsEditModalOpen(state),
  isModalLoading: selectIsModalLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addBooking,
      setAddBookingState,
      setIsEditModalOpen,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
