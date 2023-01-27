export const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  CHECK_IS_USER_AUTHENTICATED: 'CHECK_IS_USER_AUTHENTICATED',
  GET_RESET_PASSWORD_ACTION: 'GET_RESET_PASSWORD_ACTION',
  SET_AUTHENTICATION_CHECKED: 'SET_AUTHENTICATION_CHECKED',
  SET_IS_LOADING: 'SET_LOADING',
  RESET_AUTH: 'RESET_AUTH',
};

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const checkIsUserAuthenticated = (payload) => ({
  type: types.CHECK_IS_USER_AUTHENTICATED,
  payload,
});

export const getResetPassword = (payload) => ({
  type: types.GET_RESET_PASSWORD_ACTION,
  payload,
});

export const login = (payload) => ({
  type: types.LOGIN,
  payload,
});

export const setIsLoading = (payload) => ({
  type: types.SET_IS_LOADING,
  payload,
});

export const setAuthenticationChecked = (payload) => ({
  type: types.SET_AUTHENTICATION_CHECKED,
  payload,
});

export const logout = (payload) => ({
  type: types.LOGOUT,
  payload,
});

export const resetAuth = (payload) => ({
  type: types.RESET_AUTH,
  payload,
});
