import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  getProductsBySubCategory,
  searchProduct,
} from './thunk';

const handlePending = state => {
  state = [];
};
const handlePendingGetProductsBySubCategory = (state, { payload }) => {
  state = [];
};
const handlePendingGetProductsByCategory = (state, { payload }) => {
  state = [];
};

const handleFulfilled = (state, { payload }) => {
  state.product = payload.products;
  state.filters = payload.filters;
  state.totalPage = payload.totalPages;
};
const handleFulfilledGetProductsByCategory = (state, { payload }) => {
  state.product = payload.products;
  state.filters = payload.filters;
  state.totalPage = payload.totalPages;
};

const handleFulfilledSearch = (state, { payload }) => {};

const handleFulfilledGetProductsBySubCategory = (state, { payload }) => {
  state.product = payload.products;
  state.filters = payload.filters;
  state.totalPage = payload.totalPages;
};

const handleRejected = state => {};
const handleRejectedGetProductsBySubCategory = (state, { payload }) => {};
const handleRejectedGetProductsByCategory = (state, { payload }) => {};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.products,
  extraReducers: builder => {
    builder
      .addCase(
        getProductsByCategory.pending,
        handlePendingGetProductsByCategory
      )
      .addCase(
        getProductsByCategory.fulfilled,
        handleFulfilledGetProductsByCategory
      )
      .addCase(
        getProductsByCategory.rejected,
        handleRejectedGetProductsByCategory
      )
      .addCase(
        getProductsBySubCategory.pending,
        handlePendingGetProductsBySubCategory
      )
      .addCase(
        getProductsBySubCategory.fulfilled,
        handleFulfilledGetProductsBySubCategory
      )
      .addCase(
        getProductsBySubCategory.rejected,
        handleRejectedGetProductsBySubCategory
      )
      .addCase(searchProduct.fulfilled, handleFulfilledSearch)
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
