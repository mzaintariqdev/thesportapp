import { createSelector } from 'reselect';

const selectAuth = (state) => state.authReducer;

export const selectUser = createSelector(selectAuth, (state) => state.user);

export const selectUserType = createSelector(
  selectAuth,
  (state) => state.user.userType
);

export const selectUsername = createSelector(
  selectAuth,
  (state) => state.user.userName
);

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (state) => state.isAuthenticated
);

export const selectIsLoading = createSelector(
  selectAuth,
  (state) => state.isLoading
);

export const selectIsAuthenticationChecked = createSelector(
  selectAuth,
  (state) => state.isAuthenticationChecked
);
