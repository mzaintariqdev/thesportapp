export const types = {
  GET_CLIENTS: 'GET_CLIENTS',
  SET_CLIENTS: 'SET_CLIENTS',
  SET_IS_LOADING: 'SET_LOADING',
};

export const getClients = (payload) => ({
  type: types.GET_CLIENTS,
  payload,
});

export const setClients = (payload) => ({
  type: types.SET_CLIENTS,
  payload,
});

export const setIsLoading = (payload) => ({
  type: types.SET_IS_LOADING,
  payload,
});
