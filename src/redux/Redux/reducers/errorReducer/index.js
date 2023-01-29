import { ERROR_TYPES } from "../../actions/errors";

const initialValue = {};

const errorReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ERROR_TYPES.ADD_ERROR:
      console.log("error was added", action.payload);
      return action.payload;
    case ERROR_TYPES.REMOVE_ERROR:
      console.log("error was removed");
      return {};
    default:
      return state;
  }
};

export default errorReducer;
