import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { getAllProducts, getProducts, searchProduct } from './thunk';

const handlePending = state => {
  state = [];
};

const handleFulfilled = (state, { payload }) => {
  console.log(payload);
  state.product = payload.products;
  state.filters = payload.filters;
  state.totalPage = payload.totalPages;
};

const handleRejected = state => {};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.products,
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, handlePending)
      .addCase(getProducts.fulfilled, handleFulfilled)
      .addCase(getProducts.rejected, handleRejected)
      .addCase(getAllProducts.pending, handlePending)
      .addCase(getAllProducts.fulfilled, handleFulfilled)
      .addCase(getAllProducts.rejected, handleRejected)
      .addCase(searchProduct.fulfilled, handleFulfilled);
  },
});

export const productReducer = productSlice.reducer;
