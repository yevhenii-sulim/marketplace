import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { getUser } from '../auth/thunk';
import { refreshToken } from '../refreshToken';
import { addNullRating, deleteRating } from '../rating/slice';
axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';

export const addCommentFromStory = createAsyncThunk(
  'products/addComment',
  async ({ comment, rating, id }, { getState, rejectWithValue, dispatch }) => {
    try {
      const token = getState().users.token;
      const response = await axios.post(
        `/comment`,
        {
          parent: null,
          body: comment,
          product: id,
          rating,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addNullRating());
      return response;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();
          console.log(newToken);
          const response = await axios.post(
            `/comment`,
            {
              parent: null,
              body: comment,
              product: id,
            },
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
              },
            }
          );
          return response;
        } catch (refreshError) {
          return rejectWithValue('Token refresh failed');
        }
      }
      console.log('errorCommentProduct', error);
      dispatch(deleteRating());
      Notiflix.Notify.failure('Вибачте, сталася помилка', {
        timeout: 6000,
      });
      return rejectWithValue(error.message);
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
      window.location.href = '/marketplace/error';
    }
  }
);

export const searchProduct = createAsyncThunk(
  'products/searchProduct',
  async title => {
    if (!title) return;

    try {
      const { data } = await axios.get(`/products/search?title=${title}`);
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
  async title => {
    console.log('searshThunk', title);
    if (!title) return;
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
  async (productId, { getState, rejectWithValue, dispatch }) => {
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
      console.log('newToken');
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();
          console.log(newToken);
          const { data } = await axios.patch(
            `/favorite/add/${productId}`,
            productId,
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          return data;
        } catch (refreshError) {
          return rejectWithValue('Token refresh failed');
        }
      }
      console.log('errorFavoriteProduct', error);
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteProduct = createAsyncThunk(
  'products/removeFavoriteProduct',
  async (productId, { getState, rejectWithValue, dispatch }) => {
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
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();
          console.log(newToken);
          const { data } = await axios.patch(
            `/favorite/remove/${productId}`,
            productId,
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          return data;
        } catch (refreshError) {
          return rejectWithValue('Token refresh failed');
        }
      }
      console.log('errorFavoriteProduct', error);
      return rejectWithValue(error.message);
    }
  }
);

export const getProduct = createAsyncThunk('products/getProduct', async id => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    return data;
  } catch (error) {
    window.location.href = '/marketplace/error';
    console.log('errorGetProduct', error);
  }
});

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { getState, rejectWithValue }) => {
    axios.defaults.headers.common.Authorization = `Bearer ${
      getState().users.token
    }`;
    try {
      const { data } = await axios.delete(`/products/${id}`);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();
          axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
          const { data } = await axios.delete(`/products/${id}`);
          return data;
        } catch (refreshError) {
          return rejectWithValue('Token refresh failed');
        }
      }
      console.log('errorFavoriteProduct', error);
      return rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product, { getState, rejectWithValue }) => {
    try {
      const data = await axios.post(`/products/create`, product, {
        headers: {
          Authorization: `Bearer ${getState().users.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      window.location.href = '/marketplace/success-created';
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();
          console.log(newToken);
          const data = await axios.post(`/products/create`, product, {
            headers: {
              Authorization: `Bearer ${newToken}`,
              'Content-Type': 'multipart/form-data',
            },
          });
          return data;
        } catch (refreshError) {
          return rejectWithValue('Token refresh failed');
        }
      }
      Notiflix.Notify.failure(error.data.message, {
        timeout: 6000,
      });
      console.log('errorCreateProduct', error);
      return rejectWithValue(error.message);
    }
  }
);
