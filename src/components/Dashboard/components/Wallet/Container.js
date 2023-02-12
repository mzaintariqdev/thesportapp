import { connect } from 'react-redux';

import {
  selectWalletData,
  selectIsWalletLoading,
} from '../../../../redux/selectors/dashboard';

const mapStateToProps = (state) => ({
  isLoading: selectIsWalletLoading(state),
  walletData: selectWalletData(state),
});

export default connect(mapStateToProps, null);
