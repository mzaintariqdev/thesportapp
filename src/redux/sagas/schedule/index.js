import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  types,
  setScheduleBookings,
  setIsScheduleLoading,
  setIsAddModalOpen,
  setBookingDate,
  setScheduleBookingsOnAddBooking,
  setIsModalLoading,
  setIsEditModalOpen,
  getBookingById,
  setBookingsOnDelete,
  setBookingById,
} from '../../actions/schedule';

import showNotifications from '../../../services/utils/showNotification';
import {
  EditBookingsApiService,
  addBookingService,
  deleteBookingsApiService,
  getBookingByIdService,
  getBookings,
} from '../../../services/scheduleServices';
import { sleep } from '../../../services/utils/helpers';

function* handleAddBooking(action) {
  const { data } = action.payload;
  yield put(setIsModalLoading({ isModalLoading: true }));
  const { error } = yield call(addBookingService, data);
  if (error) {
    showNotifications(error, true, error.status);
    yield put(setIsModalLoading({ isModalLoading: false }));
  } else {
    yield put(setIsModalLoading({ isModalLoading: false }));
    yield put(setIsAddModalOpen({ open: false }));
    yield put(setIsScheduleLoading({ isLoading: true }));

    yield put(setScheduleBookingsOnAddBooking({ data }));

    showNotifications('Booking successfully added.');
  }
  yield put(setIsScheduleLoading({ isLoading: false }));
}

function* handleGetBookings() {
  yield put(setIsScheduleLoading({ isLoading: true }));

  const { data: bookings, error } = yield call(getBookings);

  if (error) {
    showNotifications('error');
  } else {
    yield put(setScheduleBookings({ bookings }));
  }
  yield put(setIsScheduleLoading({ isLoading: false }));
}

function* handleSetBookingDate(action) {
  const { date } = action.payload;

  yield put(setBookingDate({ date }));
  sleep(2000);
  yield put(setIsAddModalOpen({ open: true }));
}

function* handleSetBookingId(action) {
  const { date } = action.payload;

  yield put(getBookingById({ date }));
  sleep(2000);
  yield put(setIsEditModalOpen({ open: true }));
}

function* handleDeleteBookingId(action) {
  const { id } = action.payload;
  const { error, data } = yield call(deleteBookingsApiService, id);
  if (error) {
    showNotifications(data.message);
  } else {
    showNotifications(data.message);
    yield put(setBookingsOnDelete({ id }));
  }
}

function* handleGetBookingId(action) {
  yield put(setIsModalLoading({ isModalLoading: true }));
  const { id } = action.payload;
  const { error, data } = yield call(getBookingByIdService, id);
  if (error) {
    showNotifications(error);
  } else {
    yield put(setBookingById({ data }));
  }
  yield put(setIsModalLoading({ isModalLoading: false }));
}

function* handleEditBookingId(action) {
  yield put(setIsModalLoading({ isModalLoading: true }));
  const { id } = action.payload;
  const { error, data } = yield call(EditBookingsApiService, id);
  if (error) {
    yield put(setIsModalLoading({ isModalLoading: false }));

    showNotifications(data.message);
  } else {
    yield put(setIsModalLoading({ isModalLoading: false }));

    showNotifications(data.message);
  }
}

export default function* scheduleSagas() {
  yield all([
    takeLatest(types.GET_BOOKING_BY_ID, handleGetBookingId),
    takeLatest(types.ADD_BOOKING, handleAddBooking),
    takeLatest(types.EDIT_BOOKING_BY_ID, handleEditBookingId),
    takeLatest(types.DELETE_BOOKING_BY_ID, handleDeleteBookingId),
    takeLatest(types.SET_BOOKING_ID, handleSetBookingId),
    takeLatest(types.ADD_BOOKING_DATE, handleSetBookingDate),
    takeLatest(types.GET_SCHEDULE_BOOKINGS, handleGetBookings),
  ]);
}
