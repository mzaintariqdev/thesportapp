import { all, call, put, takeLatest } from 'redux-saga/effects';

import jwt_decode from 'jwt-decode';
import { notification } from 'antd';

import {
  loginSuccess,
  types,
  setIsLoading,
  setAuthenticationChecked,
  resetAuth,
} from '../../actions/auth';

import history from '../../../history';
import { routes } from '../../../routes/Routes';
import { loginApiService } from '../../../services/authServices';

function* checkIsUserAuthenticated() {
  const token = localStorage.getItem('token');

  if (token) {
    const user = jwt_decode(token);
    yield put(loginSuccess({ user }));
  } else {
    history.push(routes.loginUrl);
  }

  yield put(setAuthenticationChecked());
}

function* handleResetPassword(action) {
  const { email } = action.payload;
  const { error, data } = yield call(loginApiService, email);

  if (error) {
    notification.error({
      message: 'Login error',
      description: error,
    });
  } else {
    notification.error({
      message: 'success',
      description: data.message,
    });
  }
}

function* handleLogin(action) {
  yield put(setIsLoading({ isLoading: true }));
  console.log(action.payload);
  const { data, error } = yield call(loginApiService, action.payload);

  yield put(setIsLoading({ isLoading: false }));

  if (error) {
    notification.error({
      message: 'Login error',
      description: error,
    });
  } else {
    const { token } = data;
    window.localStorage.setItem('token', token);
    yield call(checkIsUserAuthenticated);
    history.push(routes.homeUrl);
  }
}

function* logout() {
  localStorage.removeItem('token');
  yield put(resetAuth());
  window.location.reload();
}

export default function* authSagas() {
  yield all([
    takeLatest(types.CHECK_IS_USER_AUTHENTICATED, checkIsUserAuthenticated),
    takeLatest(types.GET_RESET_PASSWORD_ACTION, handleResetPassword),
    takeLatest(types.LOGIN, handleLogin),
    takeLatest(types.LOGOUT, logout),
  ]);
}
