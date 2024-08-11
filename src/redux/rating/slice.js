import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceRating = createSlice({
  name: 'rating',
  initialState: initialState.rating,
  reducers: {
    addNullRating(state) {
      return (state = [...state, 0]);
    },
    addRating(state, { payload }) {
      const filteredState = state.filter(item => item !== 0);
      return (state = [...filteredState, payload]);
    },
    deleteRating(state) {
      return (state = []);
    },
  },
});

export const ratingReducer = sliceRating.reducer;
export const { addRating, deleteRating, addNullRating } = sliceRating.actions;
