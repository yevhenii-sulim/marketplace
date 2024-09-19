import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceOrder = createSlice({
  name: 'product',
  initialState: initialState.order,
  reducers: {
    addProduct(state, { payload }) {
      state.push(payload);
    },
    removeProduct(state, { payload }) {
      state.filter(item => item !== payload);
    },
  },
});

export const orderReducer = sliceOrder.reducer;
export const { addProduct, removeProduct } = sliceOrder.actions;
