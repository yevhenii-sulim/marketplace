import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceModalForm = createSlice({
  name: 'modalFormAuth',
  initialState: initialState.openFormModalAuth,
  reducers: {
    toggleModalAuth(state, { payload }) {
      return (state = payload);
    },
  },
});

export const modalFormAuthReducer = sliceModalForm.reducer;
export const { toggleModalAuth } = sliceModalForm.actions;
