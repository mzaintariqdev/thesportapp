import { connect } from "react-redux";

import { selectUserType } from "../../../redux/selectors/auth";

const mapStateToProps = (state) => ({
  userType: selectUserType(state),
});

export default connect(mapStateToProps);
