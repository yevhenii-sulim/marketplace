import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const orderDataSlice = createSlice({
  name: 'ordering',
  initialState: initialState.openModalBasket,
  reducers: {
    toggleOrdering(state, { payload }) {
      return (state = payload);
    },
  },
});

export const sliceOrderReducer = orderDataSlice.reducer;
export const { toggleOrdering } = orderDataSlice.actions;
