import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAllProducts = createAsyncThunk(
  'products/getAllProduct',
  async ({ page, limit }) => {
    try {
      const data = await axios.get(`/products?page=${page}&limit=${limit}`);
      return data.data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const getProductsBySubCategory = createAsyncThunk(
  'products/getProductsBySubCategory',
  async subCategory => {
    try {
      const data = await axios.get(
        `products/filterBySubcategory/${subCategory}`
      );
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  'products/getProductsByCategory',
  async category => {
    try {
      const { data } = await axios.get(
        `/products/filterByCategory/${category}`
      );
      console.log('datacategory', data);

      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);
export const searchProduct = createAsyncThunk(
  'products/searchProduct',
  async title => {
    try {
      const data = await axios.get(`/products/search/${title}`);
      console.log('search', data);

      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const addFavoriteProduct = createAsyncThunk(
  'products/addFavoriteProduct',
  async (productId, { getState }) => {
    try {
      const { data } = await axios.patch(
        `/favorite/add/${productId}`,
        productId,
        {
          headers: {
            Authorization: `Bearer ${getState().users.token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('dataSub', data);

      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const getProduct = createAsyncThunk('products/getProduct', async id => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log('error', error);
  }
});

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product, { getState }) => {
    try {
      const data = await axios.post(`/products/create`, product, {
        headers: {
          Authorization: `Bearer ${getState().users.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('data', data);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.data.message, {
        timeout: 6000,
      });
      console.log('error', error);
    }
  }
);
