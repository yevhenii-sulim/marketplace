import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const userSlice = createSlice({
  name: 'isUserAuth',
  initialState: initialState.isLoad,
  reducers: {
    isAuth(state, action) {
      return (state = action.payload);
    },
  },
});
export const userAuthReduser = userSlice.reducer;
export const { isAuth } = userSlice.actions;
