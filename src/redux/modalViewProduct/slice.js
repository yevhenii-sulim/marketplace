import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const modalViewAddedProductSlice = createSlice({
  name: 'viewAddProduct',
  initialState: initialState.viewAddProduct,
  reducers: {
    toggleModalView(state, { payload }) {
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
export const modalViewAddedProductReducer = modalViewAddedProductSlice.reducer;
export const { toggleModalView } = modalViewAddedProductSlice.actions;
