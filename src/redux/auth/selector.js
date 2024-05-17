export const selectAuth = state =>
  state.users.isActivated && !!state.users.token;
export const selectId = state => state.users._id;
export const selectMyUser = state => state.users.myUser;
export const selectIsLoaded = state => state.users.token;
export const selectToken = state => state.users.token;
export const selectIsRending = state => state.users.isRending;
