import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectUserType } from "../../../redux/selectors/auth";
import { logout } from "../../../redux/actions/auth";

const mapStateToProps = (state) => ({
  userType: selectUserType(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      logout,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
