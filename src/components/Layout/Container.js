import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { checkIsUserAuthenticated } from "../../redux/actions/auth";
import { selectUserType } from "../../redux/selectors/auth";

const mapStateToProps = (state) => ({
  userType: selectUserType(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      checkIsUserAuthenticated,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
