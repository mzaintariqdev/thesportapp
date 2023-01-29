import { createSelector } from 'reselect';

const selectClient = (state) => state.clientReducer;

export const selectClients = createSelector(
  selectClient,
  (state) => state.clients
);

export const selectIsClientLoading = createSelector(
  selectClient,
  (state) => state.isLoading
);
