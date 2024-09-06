import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { getProducts, prevSearchProduct, searchProduct } from './thunk';

const handlePending = state => {
  state.isLoading = false;
  state.totalPage = 0;
};

const handleFulfilled = (state, { payload }) => {
  console.log(payload);

  state.isLoading = true;
  state.product = payload.products;
  state.totalPage = payload.totalPages;
  if (window.location.pathname !== state.location) {
    state.filters = payload.filters;
  }
  state.location = window.location.pathname;
};

const handleSearchFulfilled = (state, { payload }) => {
  state.search = payload;
  state.loader = false;
};

const handlePendingSearchPrev = state => {
  state.isLoadingSearch = false;
  state.loader = true;
};

const handlePrevSearchFulfilled = (state, { payload }) => {
  state.prevSearch = payload;
  state.isLoadingSearch = true;
  state.loader = false;
};
const handleRejected = state => {
  state.isLoadingSearch = true;
  state.loader = false;
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.products,
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, handlePending)
      .addCase(getProducts.fulfilled, handleFulfilled)
      .addCase(getProducts.rejected, handleRejected)
      .addCase(searchProduct.pending, handlePendingSearchPrev)
      .addCase(searchProduct.fulfilled, handleSearchFulfilled)
      .addCase(searchProduct.rejected, handleRejected)
      .addCase(prevSearchProduct.fulfilled, handlePrevSearchFulfilled)
      .addCase(prevSearchProduct.rejected, handleRejected)
      .addCase(prevSearchProduct.pending, handlePendingSearchPrev);
  },
});

export const productReducer = productSlice.reducer;
