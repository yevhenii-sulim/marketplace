import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const slicePoster = createSlice({
  name: 'poster',
  initialState: initialState.poster,
  reducers: {
    togglePoster(state, { payload }) {
      return (state = payload);
    },
  },
});

export const slicePosterReducer = slicePoster.reducer;
export const { togglePoster } = slicePoster.actions;
