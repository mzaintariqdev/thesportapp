import { all, spawn } from 'redux-saga/effects';

import authSagas from './auth';
import scheduleSagas from './schedule';

const sagas = [authSagas, scheduleSagas];

export default function* rootSagas() {
  yield all(sagas.map(spawn));
}
