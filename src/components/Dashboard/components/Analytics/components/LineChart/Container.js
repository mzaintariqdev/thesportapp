import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLineChartAnalytics } from '../../../../../../redux/actions/dashboard';
import {
  selectIsLineChartAnalyticsLoading,
  selectLineChartAnalytics,
} from '../../../../../../redux/selectors/dashboard';

const mapStateToProps = (state) => ({
  isLoading: selectIsLineChartAnalyticsLoading(state),
  lineChartData: selectLineChartAnalytics(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getLineChartAnalytics,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
