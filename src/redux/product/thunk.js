import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const publicInstans = axios.create({
  baseURL: 'https://internet-shop-api-production.up.railway.app',
});

const token = {
  set(token) {
    publicInstans.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const getAllProducts = createAsyncThunk(
  'products/getAllProduct',
  async ({ page, limit }) => {
    try {
      const data = await publicInstans.get(
        `/products?page=${page}&limit=${limit}`
      );
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

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (id, { getState }) => {
    console.log(getState().users.token);

    try {
      const data = await publicInstans.patch(`/basket/${id}`);
      token(getState().users.token);
      console.log('data', data);
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Необхідно авторизуватися', {
        timeout: 6000,
      });
      console.log('error', error);
    }
  }
);
