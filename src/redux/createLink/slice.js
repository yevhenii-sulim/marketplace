import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceCreateLinkToProduct = createSlice({
  name: 'link',
  initialState: initialState.link,
  reducers: {
    addLink(state, { payload }) {
      if (payload === null) {
        return state;
      } else if (payload === '') {
        return (state = '');
      }
      return (state = state + `/${payload}`);
    },
  },
});
export const linkReducer = sliceCreateLinkToProduct.reducer;
export const { addLink } = sliceCreateLinkToProduct.actions;
