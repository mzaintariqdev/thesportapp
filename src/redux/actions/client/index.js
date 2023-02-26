export const types = {
  GET_CLIENTS: 'GET_CLIENTS',
  SET_CLIENTS: 'SET_CLIENTS',
  GET_CLIENT_SCHEDULES: 'GET_CLIENT_SCHEDULES',
  SET_CLIENT_SCHEDULES: 'SET_CLIENT_SCHEDULES',
  SET_IS_LOADING: 'SET_LOADING',
};

export const getClientSchedules = (payload) => ({
  type: types.GET_CLIENT_SCHEDULES,
  payload,
});

export const setClientSchedules = (payload) => ({
  type: types.SET_CLIENT_SCHEDULES,
  payload,
});

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
