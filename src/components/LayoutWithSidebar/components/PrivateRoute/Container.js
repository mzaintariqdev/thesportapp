import { connect } from "react-redux";
import {
  selectIsAuthenticated,
  selectIsAuthenticationChecked,
  selectUser,
  selectUserType,
} from "../../../../redux/selectors/auth";

const mapStateToProps = (state) => ({
  userType: selectUserType(state),
  isAuthenticated: selectIsAuthenticated(state),
  isAuthenticationChecked: selectIsAuthenticationChecked(state),
  user: selectUser(state),
});

export default connect(mapStateToProps);
