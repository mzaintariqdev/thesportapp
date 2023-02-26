import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTaskAnalytics } from '../../../../../../redux/actions/dashboard';
import {
  selectIsTaskAnalyticsLoading,
  selectTaskAnalytics,
} from '../../../../../../redux/selectors/dashboard';

const mapStateToProps = (state) => ({
  isLoading: selectIsTaskAnalyticsLoading(state),
  taskData: selectTaskAnalytics(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getTaskAnalytics,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
