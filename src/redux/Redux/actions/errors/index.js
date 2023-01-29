export const ERROR_TYPES = {
  ADD_ERROR: "ADD_ERROR",
  REMOVE_ERROR: "REMOVE_ERROR",
};

export const addError = (error) => {
  return {
    type: ERROR_TYPES.ADD_ERROR,
    payload: error,
  };
};

export const removeError = (_) => {
  return { type: ERROR_TYPES.REMOVE_ERROR };
};
