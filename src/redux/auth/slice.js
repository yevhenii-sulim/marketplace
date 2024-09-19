import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { getUser, logIn, logOut, signUp, update } from './thunk';
import { changeStatusProduct } from '../product/thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleUpdatePending = state => {};

const handleSignUpFulfilled = state => {
  state.isRending = true;
};

const handleLogInFulfilled = (state, { payload }) => {
  state.error = null;
  state.user = payload.user;
  state.isLoading = false;
  state.token = payload.tokens.accessJwt;
  state.isActivated = payload.user.isActivated;
  state._id = payload.user._id;
};

const handleUpdateFulfilled = (state, { payload }) => {
  state.myUser = payload;
};
const handleGetUserFulfilled = (state, { payload }) => {
  state.myUser = payload;
};

const handleFulfilledChangeStatus = (state, { payload }) => {
  state.myUser.products.forEach(({ _id }, index) => {
    if (_id === payload._id) {
      state.myUser.products[index] = payload;
    }
  });
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
    addNewProduct(state, { payload }) {
      state.myUser.purchasedGoods = [
        ...state.myUser.purchasedGoods,
        {
          ...payload,
        },
      ];
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
      .addCase(changeStatusProduct.fulfilled, handleFulfilledChangeStatus)
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
export const { loginWithSocial, addNewProduct } = userSlice.actions;
