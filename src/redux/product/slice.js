import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  getProductsBySubCategory,
  searchProduct,
} from './thunk';

const handlePending = state => {};
const handlePendingGetProductsBySubCategory = (state, { payload }) => {};
const handlePendingGetProductsByCategory = (state, { payload }) => {};

const handleFulfilled = (state, { payload }) => {
  state.product = payload.products;
  state.totalPage = payload.totalPages;
};
const handleFulfilledGetProductsByCategory = (state, { payload }) => {
  console.log(payload);

  state.product = payload;
  state.totalPage = 0;
};

const handleFulfilledSearch = (state, { payload }) => {
  console.log(payload);
};

const handleFulfilledGetProductsBySubCategory = (state, { payload }) => {
  console.log(payload);

  state.product = payload.products;
  state.totalPage = 0;
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
