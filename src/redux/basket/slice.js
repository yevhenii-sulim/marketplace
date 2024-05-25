import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const sliceBasket = createSlice({
  name: 'basket',
  initialState: initialState.basket,
  reducers: {
    addProduct(state, { payload }) {
      state.push(payload);
    },
    deleteProduct() {},
    changeCount(state, { payload }) {
      return state.reduce((cum, item) => {
        item.id === payload.id
          ? cum.push({ ...item, count: item.count + payload.increment })
          : cum.push(item);
        return cum;
      }, []);
    },
  },
});
export const reducerBasket = sliceBasket.reducer;
export const { addProduct, deleteProduct, changeCount } = sliceBasket.actions;
