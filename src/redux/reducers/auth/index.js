import produce from "immer";

import { types } from "../../actions/auth";
import { authDefaultState } from "../../utils/defaultStates";

const defaultState = authDefaultState.default;

const handleLoginSuccess = (state, payload) => {
  state.user = payload.user;
  state.isAuthenticated = true;
  return state;
};

const handleSetLoading = (state, payload) => {
  state.isLoading = payload.isLoading;
  return state;
};

const handleAuthenticationChecked = (state) => {
  state.isAuthenticationChecked = true;
  return state;
};

// eslint-disable-next-line default-param-last
export default produce((state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return handleLoginSuccess(state, action.payload);
    case types.SET_IS_LOADING:
      return handleSetLoading(state, action.payload);
    case types.SET_AUTHENTICATION_CHECKED:
      return handleAuthenticationChecked(state);
    case types.RESET_AUTH:
      return defaultState;
    default:
      return state;
  }
});
