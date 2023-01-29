import produce from 'immer';

import { types } from '../../actions/client';
import { clientDefaultState } from '../../utils/defaultStates';

const defaultState = clientDefaultState;

const handleSetClients = (state, payload) => {
  state.clients = payload.clients;
  return state;
};

const handleSetClientsLoading = (state, payload) => {
  state.isLoading = payload.isLoading;
  return state;
};

export default produce((state = defaultState, action) => {
  switch (action.type) {
    case types.SET_CLIENTS:
      return handleSetClients(state, action.payload);
    case types.SET_IS_LOADING:
      return handleSetClientsLoading(state, action.payload);
    default:
      return state;
  }
});