import { createSlice } from '@reduxjs/toolkit';
const { initialState } = require('../initialState');

const sliceError = createSlice({
  name: 'error',
  initialState: initialState.error,
  reducers: {
    showError: (state, { payload }) => (state = payload),
    hideError: state => (state = null),
  },
});

export const { showError, hideError } = sliceError.actions;
export const errorReducer = sliceError.reducer;
