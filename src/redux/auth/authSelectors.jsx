export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.errorMessage;

export const selectisRegistered = state => state.auth.isRegistered;
