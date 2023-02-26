import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getClientSchedules } from '../../../../../../redux/actions/client';
import { selectClientSchedule } from '../../../../../../redux/selectors/client';

const mapStateToProps = (state) => ({
  clientSchedules: selectClientSchedule(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getClientSchedules,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
