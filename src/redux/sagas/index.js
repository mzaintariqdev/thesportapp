import { all, spawn } from "redux-saga/effects";

import authSagas from "./auth";

const sagas = [authSagas];

export default function* rootSagas() {
  yield all(sagas.map(spawn));
}
