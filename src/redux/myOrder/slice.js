import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const orderDataSlice = createSlice({
  name: 'ordering',
  initialState: initialState.openModalBasket,
  reducers: {
    toggleOrdering(state, { payload }) {
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

export const sliceOrderReducer = orderDataSlice.reducer;
export const { toggleOrdering } = orderDataSlice.actions;
