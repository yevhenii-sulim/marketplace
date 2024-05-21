import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { addProduct, getAllProducts, getProduct } from '../product/thunk';

const handlePending = state => {};

const handleFulfilled = (state, { payload }) => {
  return (state = payload);
};

const handleRejected = state => {};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.product,
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(getAllProducts.pending, getProduct.pending, addProduct.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getAllProducts.fulfilled,
          getProduct.fulfilled,
          addProduct.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          getAllProducts.rejected,
          getProduct.rejected,
          addProduct.rejected
        ),
        handleRejected
      );
  },
});

export const productReducer = productSlice.reducer;
