export const selectAuth = state =>
  state.users.isActivated && !!state.users.token;
export const selectIsLoaded = state => state.users.isLoaded;
export const selectToken = state => state.users.token;
export const selectIsRerendung = state => state.users.isRerendung;
