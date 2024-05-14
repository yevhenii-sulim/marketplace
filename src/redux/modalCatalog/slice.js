import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const modalCatalogSlice = createSlice({
  name: 'modalCatalog',
  initialState: initialState.openCatalog,
  reducers: {
    toggleModal(state, { payload }) {
      return (state = payload);
    },
  },
});
export const modalCatalogReducer = modalCatalogSlice.reducer;
export const { toggleModal } = modalCatalogSlice.actions;
