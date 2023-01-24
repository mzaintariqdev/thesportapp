export const scheduleDefaultState = {
  bookings: [],
  isScheduleLoading: false,
  isAddModalOpen: false,
  isEditModalOpen: false,
  isModalLoading: false,
  addBookingFormDefault: {
    client: "",
    resource: "",
    date: "",
    time: "",
    recurrence: "",
  },
};

export default scheduleDefaultState;
