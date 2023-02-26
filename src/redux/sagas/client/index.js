import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  types,
  setClients,
  setIsLoading,
  setClientSchedules,
} from '../../actions/client';

import showNotifications from '../../../services/utils/showNotification';
import {
  getClientScheduleService,
  getClientsService,
} from '../../../services/clientServices';

function* handleGetClients() {
  yield put(setIsLoading({ isLoading: true }));

  const { data: clients, error } = yield call(getClientsService);

  if (error) {
    showNotifications('error');
  } else {
    yield put(setClients({ clients }));
  }
  yield put(setIsLoading({ isLoading: false }));
}

function* handleGetClientSchedules(action) {
  const { id } = action.payload;

  const { data: clientSchedules, error } = yield call(
    getClientScheduleService,
    id
  );

  if (error) {
    showNotifications('error');
  } else {
    yield put(setClientSchedules({ clientSchedules }));
  }
}

export default function* clientSagas() {
  yield all([takeLatest(types.GET_CLIENTS, handleGetClients)]);
  yield all([takeLatest(types.GET_CLIENT_SCHEDULES, handleGetClientSchedules)]);
}
