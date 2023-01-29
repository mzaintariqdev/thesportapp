import { all, spawn } from 'redux-saga/effects';

import authSagas from './auth';
import scheduleSagas from './schedule';
import clientSagas from './client';

const sagas = [authSagas, scheduleSagas, clientSagas];

export default function* rootSagas() {
  yield all(sagas.map(spawn));
}
