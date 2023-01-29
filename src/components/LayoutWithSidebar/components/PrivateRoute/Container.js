import { connect } from "react-redux";
import {
  selectIsAuthenticated,
  selectUser,
  selectUserType,
} from "../../../../redux/selectors/auth";

const mapStateToProps = (state) => ({
  userType: selectUserType(state),
  isAuthenticated: selectIsAuthenticated(state),
  user: selectUser(state),
});

export default connect(mapStateToProps);
