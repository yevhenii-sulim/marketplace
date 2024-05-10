import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceModalForm = createSlice({
  name: 'modalForm',
  initialState: initialState.openFormModal,
  reducers: {
    toggleModalForm(state, { payload }) {
      return (state = payload);
    },
  },
});

export const modalFormReducer = sliceModalForm.reducer;
export const { toggleModalForm } = sliceModalForm.actions;
