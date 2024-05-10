import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const modalCotalogSlice = createSlice({
  name: 'modalCotalog',
  initialState: initialState.openCatalog,
  reducers: {
    toggleModal(state, { payload }) {
      return (state = payload);
    },
  },
});
export const modalCotalogReducer = modalCotalogSlice.reducer;
export const { toggleModal } = modalCotalogSlice.actions;
