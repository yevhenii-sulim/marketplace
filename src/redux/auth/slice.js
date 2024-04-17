import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { logIn, logOut, signUp, update } from './thunk';

const hendlePending = state => {
  state.isLoading = true;
};

const hendleUpdatePending = state => {
  state.isRerendung = true;
};

const hendleSignUpFulfilled = state => {
  state.isLoading = false;
};

const hendleLogInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  state.token = payload.token;
};

const hendleUpdateFulfilled = (state, { payload }) => {
  state.isRerendung = false;
  state.user = payload;
};
const hendleLogOutFulfilled = state => {
  state.user = {
    firstName: '',
    lastName: '',
    numberPhone: '',
    email: '',
    password: '',
  };
  state.token = null;
};
const hendleRejected = (state, action) => {
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState.users,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, hendleSignUpFulfilled)
      .addCase(logIn.fulfilled, hendleLogInFulfilled)
      .addCase(logOut.fulfilled, hendleLogOutFulfilled)
      .addCase(update.pending, hendleUpdatePending)
      .addCase(update.fulfilled, hendleUpdateFulfilled)
      .addMatcher(isAnyOf(signUp.pending, logIn.pending), hendlePending)
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          logIn.rejected,
          update.rejected,
          logOut.rejected
        ),
        hendleRejected
      );
  },
});

export const userAuthReduser = userSlice.reducer;
