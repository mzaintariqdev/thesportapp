import { MODAL_TYPES } from "../../actions/modal";

const initialValue = false;

const modalReducer = (state = initialValue, action) => {
  switch (action.type) {
    case MODAL_TYPES.OPEN_MODAL:
      console.log("action status in the reducer", action.payload);
      return action.payload;

    case MODAL_TYPES.CLOSE_MODAL:
      console.log("action status in the reducer", action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default modalReducer;
