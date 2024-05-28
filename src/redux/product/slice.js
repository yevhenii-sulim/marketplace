import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { getAllProducts, getProduct } from '../product/thunk';

const handlePending = state => {};

const handleFulfilled = (state, { payload }) => (state = payload.products);

const handleRejected = state => {};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.product,
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(getAllProducts.pending, getProduct.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getAllProducts.fulfilled, getProduct.fulfilled),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(getAllProducts.rejected, getProduct.rejected),
        handleRejected
      );
  },
});

export const productReducer = productSlice.reducer;
