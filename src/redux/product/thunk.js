import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { getUser } from '../auth/thunk';
import $api from '../interceptors/interceptor';

export const addCommentFromStory = createAsyncThunk(
  'products/addComment',
  async ({ comment, id }, { getState }) => {
    try {
      const token = getState().users.token;
      const response = await $api.post(
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
      const { data } = await $api.get(
        `/products/filterAndSortedProducts/${textQuery}?page=${page}&${paramQuery}`
      );
      console.log(data);

      return data;
    } catch (error) {
      console.log('errorGetProductBySubCateg', error);
      window.location.href = '/marketplace/error';
    }
  }
);

export const searchProduct = createAsyncThunk(
  'products/searchProduct',
  async title => {
    if (!title) return;

    try {
      const { data } = await $api.get(`/products/search?title=${title}`);
      console.log('search', data);

      return data;
    } catch (error) {
      window.location.href = '/marketplace/error';
      console.log('errorSearch', error);
    }
  }
);
export const prevSearchProduct = createAsyncThunk(
  'products/prevSearchProduct',
  async (title, { signal }) => {
    console.log('searshThunk', title);
    if (!title) return;
    try {
      const { data } = await $api.get(`/products/search?title=${title}`, {
        signal,
      });
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
      const { data } = await $api.patch(
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
      const { data } = await $api.patch(
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
    const { data } = await $api.get(`/products/${id}`);
    return data;
  } catch (error) {
    window.location.href = '/marketplace/error';
    console.log('errorGetProduct', error);
  }
});

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product, { getState }) => {
    try {
      const data = await $api.post(`/products/create`, product, {
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
