import { all, call, put, takeLatest } from 'redux-saga/effects';

import { types, setClients, setIsLoading } from '../../actions/client';

import showNotifications from '../../../services/utils/showNotification';
import { getClientsService } from '../../../services/clientServices';

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

export default function* clientSagas() {
  yield all([takeLatest(types.GET_CLIENTS, handleGetClients)]);
}
