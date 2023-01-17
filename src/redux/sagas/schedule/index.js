import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  types,
  setScheduleBookings,
  setIsScheduleLoading,
} from "../../actions/schedule";

import showNotifications from "../../../services/utils/showNotification";
import {
  addBookingService,
  getBookings,
} from "../../../services/scheduleServices";
import { sleep } from "../../../services/utils/helpers";

function* handleAddBooking(action) {
  const { data } = action.payload;
  yield put(setIsScheduleLoading({ isLoading: true }));
  const { error } = yield call(addBookingService, data);
  if (error) {
    showNotifications(error, true, error.status);
  } else {
    showNotifications("Booking successfully added.");
  }
  yield put(setIsScheduleLoading({ isLoading: false }));
}

function* handleGetBookings() {
  yield put(setIsScheduleLoading({ isLoading: true }));

  const { data: bookings, error } = yield call(getBookings);

  if (error) {
    showNotifications("error");
  } else {
    yield put(setScheduleBookings({ bookings }));
  }
  yield put(setIsScheduleLoading({ isLoading: false }));
}

export default function* scheduleSagas() {
  yield all([
    takeLatest(types.ADD_BOOKING, handleAddBooking),
    takeLatest(types.GET_SCHEDULE_BOOKINGS, handleGetBookings),
  ]);
}
