import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceModalForm = createSlice({
  name: 'modalFormConfirm',
  initialState: initialState.openFormModal,
  reducers: {
    toggleModalFormConfirm(state, { payload }) {
      return (state = payload);
    },
  },
});

export const modalFormReducer = sliceModalForm.reducer;
export const { toggleModalFormConfirm } = sliceModalForm.actions;
