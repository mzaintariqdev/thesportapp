export const MODAL_TYPES = {
  CLOSE_EVENT: "CLOSE_EVENT",
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_MODAL: "OPEN_MODAL",
};

export const closeEvent = () => {
  console.log("you closed the event and removed event state");
  return {
    type: MODAL_TYPES.CLOSE_EVENT,
  };
};

export const closeModal = () => {
  console.log("modal is closed");
  return {
    type: MODAL_TYPES.CLOSE_MODAL,
    payload: false,
  };
};

export const openModal = () => {
  console.log("modal is open");
  return {
    type: MODAL_TYPES.OPEN_MODAL,
    payload: true,
  };
};
