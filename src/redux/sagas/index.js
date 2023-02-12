import { all, spawn } from 'redux-saga/effects';

import authSagas from './auth';
import scheduleSagas from './schedule';
import clientSagas from './client';
import dashboardSagas from './dashboard';

const sagas = [authSagas, scheduleSagas, clientSagas, dashboardSagas];

export default function* rootSagas() {
  yield all(sagas.map(spawn));
}
