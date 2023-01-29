import { bindActionCreators } from 'redux';
import {
  deleteBookingById,
  getBookingById,
  setBookingById,
  setIsEditModalOpen,
} from '../../../../../redux/actions/schedule';
import { connect } from 'react-redux';
import {
  selectAddBookingDefaultValue,
  selectIsModalLoading,
  selectIsEditModalOpen,
  selectBookingId,
  selectBookingData,
} from '../../../../../redux/selectors/schedule';

const mapStateToProps = (state) => ({
  defaultValue: selectAddBookingDefaultValue(state),
  isModalOpen: selectIsEditModalOpen(state),
  isModalLoading: selectIsModalLoading(state),
  bookingId: selectBookingId(state),
  bookingData: selectBookingData(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      deleteBookingById,
      getBookingById,
      setBookingById,
      setIsEditModalOpen,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
