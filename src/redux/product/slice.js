import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { getProducts, searchProduct } from './thunk';

const handlePending = state => {
  state.product = [];
  state.totalPage = 0;
};

const handleFulfilled = (state, { payload }) => {
  console.log(payload);

  state.product = payload.products;
  state.filters = payload.filters;
  state.totalPage = payload.totalPages;
};

const handleSearchFulfilled = (state, { payload }) => {
  state.search = payload;
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
      .addCase(searchProduct.fulfilled, handleSearchFulfilled);
  },
});

export const productReducer = productSlice.reducer;
