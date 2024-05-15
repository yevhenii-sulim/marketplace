import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import Notiflix from 'notiflix';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const publicInstans = axios.create({
  baseURL: 'https://internet-shop-api-production.up.railway.app',
});

export const getAllProducts = createAsyncThunk(
  'products/getAllProduct',
  async ({ page, limit }) => {
    try {
      const data = await publicInstans.get(
        `/products?page=${page}&limit=${limit}`
      );
      console.log(page, data);

      return data.data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const getProduct = createAsyncThunk('products/getProduct', async id => {
  try {
    const { data } = await publicInstans.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log('error', error);
  }
});
