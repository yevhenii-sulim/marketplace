import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const modalViewAddedProductSlice = createSlice({
  name: 'viewAddProduct',
  initialState: initialState.viewAddProduct,
  reducers: {
    toggleModalView(state, { payload }) {
      return (state = payload);
    },
  },
});
export const modalViewAddedProductReducer = modalViewAddedProductSlice.reducer;
export const { toggleModalView } = modalViewAddedProductSlice.actions;
