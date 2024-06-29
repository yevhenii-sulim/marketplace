import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceOrder = createSlice({
  name: 'ordering',
  initialState: initialState.ordering,
  reducers: {
    toggleOrdering(state, { payload }) {
      return (state = payload);
    },
  },
});

export const sliceOrderReducer = sliceOrder.reducer;
export const { toggleOrdering } = sliceOrder.actions;
