export const scheduleDefaultState = {
  bookings: [],
  selectedBookingId: undefined,
  selectedBooking: undefined,
  isScheduleLoading: false,
  isAddModalOpen: false,
  isEditModalOpen: false,
  isModalLoading: false,
  addBookingFormDefault: {
    client: '',
    resource: '',
    date: '',
    time: '',
    recurrence: '',
  },
};

export default scheduleDefaultState;
