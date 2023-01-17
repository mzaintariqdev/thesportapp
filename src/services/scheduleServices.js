import { mockSchedule } from "../utils/mocks/mockSchedule";
import { sleep } from "./utils/helpers";

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
