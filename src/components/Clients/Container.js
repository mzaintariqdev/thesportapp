import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getClients } from '../../redux/actions/client';
import {
  selectClients,
  selectIsClientLoading,
} from '../../redux/selectors/client';

const mapStateToProps = (state) => ({
  isLoading: selectIsClientLoading(state),
  clients: selectClients(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getClients,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
