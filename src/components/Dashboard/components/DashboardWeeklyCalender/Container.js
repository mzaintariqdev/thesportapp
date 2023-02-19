import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getBookingListByDate,
  getMoreBookingListByDate,
} from '../../../../redux/actions/dashboard';
import {
  selectIsBookingListByDateLoading,
  selectBookingListByDate,
  selectIsMoreBookingListByDateLoading,
} from '../../../../redux/selectors/dashboard';

const mapStateToProps = (state) => ({
  isLoading: selectIsBookingListByDateLoading(state),
  isMoreLoading: selectIsMoreBookingListByDateLoading(state),
  bookingList: selectBookingListByDate(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getBookingListByDate,
      getMoreBookingListByDate,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);