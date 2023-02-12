import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getTaskAnalytics,
  getLineChartAnalytics,
  getWalletData,
} from '../../redux/actions/dashboard';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getTaskAnalytics,
      getLineChartAnalytics,
      getWalletData,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps);
