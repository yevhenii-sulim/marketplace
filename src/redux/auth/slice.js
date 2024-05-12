import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { logIn, logOut, restorePassword, signUp, update } from './thunk';

const hendlePending = state => {
  state.isLoading = true;
};

const hendleUpdatePending = state => {
  // state.isRerendung = true;
};

const hendleSignUpFulfilled = state => {
  state.isRerendung = true;
};
const hendleRestorePasswordFulfilled = (state, { payload }) => {
  console.log(payload);
};

const hendleLogInFulfilled = (state, { payload }) => {
  state.error = null;
  state.user = payload.user;
  state.isLoading = false;
  state.token = payload.backend_tokens.token;
  state.isActivated = payload.user.isActivated;
  state._id = payload.user._id;
};

const hendleUpdateFulfilled = (state, { payload }) => {
  console.log(payload);
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
const hendleRejected = state => {
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState.users,
  reducers: {
    loginWithSocial(state, { payload }) {
      state.token = payload.accessJwt;
      state._id = payload.user._id;
      state.user = payload.user;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, hendleSignUpFulfilled)
      .addCase(logIn.fulfilled, hendleLogInFulfilled)
      .addCase(logOut.fulfilled, hendleLogOutFulfilled)
      .addCase(update.pending, hendleUpdatePending)
      .addCase(update.fulfilled, hendleUpdateFulfilled)
      .addCase(restorePassword.fulfilled, hendleRestorePasswordFulfilled)

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
export const { loginWithSocial } = userSlice.actions;
