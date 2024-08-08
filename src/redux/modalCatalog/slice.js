import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const modalCatalogSlice = createSlice({
  name: 'modalCatalog',
  initialState: initialState.openCatalog,
  reducers: {
    toggleModal(state, { payload }) {
      const body = document.querySelector('body');
      const setPaddingRightInOpenModal = window.innerWidth - body.offsetWidth;

      if (payload) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${setPaddingRightInOpenModal}px`;
      } else {
        document.body.style.overflow = 'visible';
        document.body.style.paddingRight = `0px`;
      }
      return (state = payload);
    },
  },
});
export const modalCatalogReducer = modalCatalogSlice.reducer;
export const { toggleModal } = modalCatalogSlice.actions;
