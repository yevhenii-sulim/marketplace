import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import { getUser } from '../auth/thunk';

axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const addCommentFromStory = createAsyncThunk(
  'products/addComment',
  async ({ comment, id }, { getState }) => {
    try {
      const token = getState().users.token;
      const response = await axios.post(
        `/comment`,
        {
          parent: null,
          body: comment,
          product: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ textQuery, paramQuery, page }) => {
    try {
      const { data } = await axios.get(
        `/products/filterAndSortedProducts/${textQuery}?page=${page}&${paramQuery}`
      );
      return data;
    } catch (error) {
      console.log('errorGetProductBySubCateg', error);
    }
  }
);

export const searchProduct = createAsyncThunk(
  'products/searchProduct',
  async title => {
    try {
      const { data } = await axios.get(`/products/search?title=${title}`);
      console.log('search', data);

      return data;
    } catch (error) {
      console.log('errorSearch', error);
    }
  }
);
export const prevSearchProduct = createAsyncThunk(
  'products/prevSearchProduct',
  async title => {
    try {
      const { data } = await axios.get(`/products/search?title=${title}`);
      console.log('search', data);

      return data;
    } catch (error) {
      console.log('errorSearch', error);
    }
  }
);

export const addFavoriteProduct = createAsyncThunk(
  'products/addFavoriteProduct',
  async (productId, { getState, dispatch }) => {
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
      dispatch(getUser(getState().users.myUser._id));
      return data;
    } catch (error) {
      console.log('errorFavoriteProduct', error);
    }
  }
);

export const removeFavoriteProduct = createAsyncThunk(
  'products/removeFavoriteProduct',
  async (productId, { getState, dispatch }) => {
    try {
      const { data } = await axios.patch(
        `/favorite/remove/${productId}`,
        productId,
        {
          headers: {
            Authorization: `Bearer ${getState().users.token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('dataSub', data);
      dispatch(getUser(getState().users.myUser._id));
      return data;
    } catch (error) {
      console.log('errorFavoriteProduct', error);
    }
  }
);

export const getProduct = createAsyncThunk('products/getProduct', async id => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log('errorGetProduct', error);
  }
});

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product, { getState }) => {
    product.foreach(item => console.log(item));
    try {
      const data = await axios.post(`/products/create`, product, {
        headers: {
          Authorization: `Bearer ${getState().users.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      window.location.reload();
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.data.message, {
        timeout: 6000,
      });
      console.log('errorCreateProduct', error);
    }
  }
);
