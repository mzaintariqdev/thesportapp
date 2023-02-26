import { mockSchedule } from '../utils/mocks/mockSchedule';
import { sleep } from './utils/helpers';

export const addBookingService = async (formData) => {
  await sleep(2000);
  return {
    data: formData,
    error: false,
    status: 200,
  };
};

export const getBookings = async () => {
  await sleep(2000);
  return {
    data: mockSchedule,
    error: false,
    status: 200,
  };
};

export const deleteBookingsApiService = (id) => ({
  data: { message: 'Booking deleted SuccessFully', id },
  error: false,
  status: 200,
});

export const EditBookingsApiService = async (id) => {
  await sleep(2000);
  return {
    data: { message: 'Booking Updated SuccessFully', id },
    error: false,
    status: 200,
  };
};

export const getBookingByIdService = async (id) => {
  await sleep(2000);
  const bookingById = mockSchedule.find((booking) => booking.id === id);

  return {
    data: bookingById,
    error: false,
    status: 200,
  };
};
