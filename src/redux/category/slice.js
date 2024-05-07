import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceCategory = createSlice({
  name: 'category',
  initialState: initialState.categoryProduct,
  reducers: {
    changeCategory(state, { payload }) {
      return (state = payload);
    },
  },
});

export const categoryReducer = sliceCategory.reducer;
export const { changeCategory } = sliceCategory.actions;
