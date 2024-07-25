import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const orderDataSlice = createSlice({
  name: 'orderData',
  initialState: initialState.orderData,
  reducers: {
    setOrder(state, { payload }) {
      return (state = payload);
    }
  }
});

export const orderDataReducer = orderDataSlice.reducer;
export const { setOrder } = orderDataSlice.actions;