import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { logIn, logOut, signUp, update } from './thunk';

const hendlePending = state => {
  state.isLoading = true;
};

const hendleUpdatePending = state => {
  state.isRerendung = true;
};

const hendleSignUpFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.responseSucces = true;
  console.log(payload);
};

const hendleLogInFulfilled = (state, { payload }) => {
  state.isLoaded = !!payload.backend_tokens.token;
  state.user = payload.user;
  state.isLoading = false;
  state.token = payload.backend_tokens.token;
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
const hendleRejected = (state, { payload }) => {
  console.log(payload);

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
