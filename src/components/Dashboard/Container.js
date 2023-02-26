import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getTaskAnalytics,
  getLineChartAnalytics,
  getWalletData,
} from '../../redux/actions/dashboard';
import { selectWalletData } from '../../redux/selectors/dashboard';
import { selectTaskAnalytics } from '../../redux/selectors/dashboard';
import { selectLineChartAnalytics } from '../../redux/selectors/dashboard';

const mapStateToProps = (state) => ({
  walletData: selectWalletData(state),
  taskAnalytics: selectTaskAnalytics(state),
  lineChartAnalytics: selectLineChartAnalytics(state),
});

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

export default connect(mapStateToProps, mapDispatchToProps);
