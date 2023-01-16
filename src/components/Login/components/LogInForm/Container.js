import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "../../../../redux/actions/auth";
import {
  selectIsAuthenticated,
  selectIsLoading,
} from "../../../../redux/selectors/auth";

const mapStateToProps = (state) => ({
  isLoading: selectIsLoading(state),
  isAuthenticated: selectIsAuthenticated(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      login,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
