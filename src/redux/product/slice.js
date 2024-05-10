import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { getAllProducts, getProduct } from './thunk';

const hendlePending = state => {};

const hendleFulfilled = (state, { payload }) => {
  return (state = payload);
};

const hendleRejected = state => {};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.product,
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(getAllProducts.pending, getProduct.pending),
        hendlePending
      )
      .addMatcher(
        isAnyOf(getAllProducts.fulfilled, getProduct.fulfilled),
        hendleFulfilled
      )
      .addMatcher(
        isAnyOf(getAllProducts.rejected, getProduct.rejected),
        hendleRejected
      );
  },
});

export const productReducer = productSlice.reducer;
