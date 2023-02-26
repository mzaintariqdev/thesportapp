import { bindActionCreators } from 'redux';
import { editBookingById } from '../../../../../../../redux/actions/schedule';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      editBookingById,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps);
