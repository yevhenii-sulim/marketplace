import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceCategory = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, { payload }) {
      state.categoryProduct = payload;
    },
  },
});

export const categoryReducer = sliceCategory.reducer;
export const { changeCategory } = sliceCategory.actions;
