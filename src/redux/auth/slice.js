import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { getUser, logIn, logOut, signUp, update } from './thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleUpdatePending = state => {
  // state.isRending = true;
};

const handleSignUpFulfilled = state => {
  state.isRending = true;
};

const handleLogInFulfilled = (state, { payload }) => {
  state.error = null;
  state.user = payload.user;
  state.isLoading = false;
  // state.token = payload.backend_tokens.token;
  state.token = payload.tokens.accessJwt;
  state.isActivated = payload.user.isActivated;
  state._id = payload.user._id;
};

const handleUpdateFulfilled = (state, { payload }) => {
  console.log(payload);
};
const handleGetUserFulfilled = (state, { payload }) => {
  state.myUser = payload;
};

const handleLogOutFulfilled = state => {
  state.user = {
    firstName: '',
    lastName: '',
    numberPhone: '',
    email: '',
    password: '',
  };
  state.token = null;
  state._id = null;
  state.myUser = null;
};
const handleRejected = state => {
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'users',
  initialState: initialState.users,
  reducers: {
    loginWithSocial(state, { payload }) {
      state.token = payload.accessJwt;
      state._id = payload.user._id;
      state.user = payload.user;
      state.isActivated = payload.user.isActivated;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, handleSignUpFulfilled)
      .addCase(logIn.fulfilled, handleLogInFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(update.pending, handleUpdatePending)
      .addCase(update.fulfilled, handleUpdateFulfilled)
      .addCase(getUser.fulfilled, handleGetUserFulfilled)
      .addMatcher(isAnyOf(signUp.pending, logIn.pending), handlePending)
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          logIn.rejected,
          update.rejected,
          logOut.rejected
        ),
        handleRejected
      );
  },
});

export const userAuthReducer = userSlice.reducer;
export const { loginWithSocial } = userSlice.actions;
