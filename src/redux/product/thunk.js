import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { getUser, logOut } from '../auth/thunk';
import { refreshToken } from '../refreshToken';
import { addNullRating, deleteRating } from '../rating/slice';
import { toggleModalAuth } from '../modalAuth/slice';

axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';
axios.defaults.headers.patch['Content-Type'] = 'multipart/form-data';

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

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
                withCredentials: true,
              },
            }
          );
          return response;
        } catch (refreshError) {
          dispatch(logOut());
          Notiflix.Notify.info('Ваша авторизація застаріла, авторизуйтесь');
          dispatch(toggleModalAuth(true));
          // return rejectWithValue('Token refresh failed');
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
      window.location.href = '/marketplace/404';
    }
  }
);

export const searchProduct = createAsyncThunk(
  'products/searchProduct',
  async title => {
    if (!title) return;
    try {
      const { data } = await axios.get(`/products/search?title=${title}`);
      return data;
    } catch (error) {
      window.location.href = '/marketplace/404';
    }
  }
);

export const prevSearchProduct = createAsyncThunk(
  'products/prevSearchProduct',
  async title => {
    if (!title) return;
    try {
      const { data } = await axios.get(`/products/search?title=${title}`);
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
      setToken(getState().users.token);
      const { data } = await axios.patch(
        `/favorite/add/${productId}`,
        productId
      );
      dispatch(getUser(getState().users.myUser._id));
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();
          const { data } = await axios.patch(
            `/favorite/add/${productId}`,
            productId,
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
                'Content-Type': 'multipart/form-data',
                withCredentials: true,
              },
            }
          );
          return data;
        } catch (refreshError) {
          dispatch(logOut());
          Notiflix.Notify.info('Ваша авторизація застаріла, авторизуйтесь');
          dispatch(toggleModalAuth(true));
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
      dispatch(getUser(getState().users.myUser._id));
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();

          const { data } = await axios.patch(
            `/favorite/remove/${productId}`,
            productId,
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
                'Content-Type': 'multipart/form-data',
                withCredentials: true,
              },
            }
          );
          return data;
        } catch (refreshError) {
          dispatch(logOut());
          Notiflix.Notify.info('Ваша авторизація застаріла, авторизуйтесь');
          dispatch(toggleModalAuth(true));
          // return rejectWithValue('Token refresh failed');
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
    window.location.href = '/marketplace/404';
    console.log('errorGetProduct', error);
  }
});

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { getState, rejectWithValue, dispatch }) => {
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
          axios.defaults.headers.delete.withCredentials = true;
          const { data } = await axios.delete(`/products/${id}`);
          return data;
        } catch (refreshError) {
          dispatch(logOut());
          Notiflix.Notify.info('Ваша авторизація застаріла, авторизуйтесь');
          dispatch(toggleModalAuth(true));
          // return rejectWithValue('Token refresh failed');
        }
      }
      console.log('errorFavoriteProduct', error);
      return rejectWithValue(error.message);
    }
  }
);

export const changeStatusProduct = createAsyncThunk(
  '/products/changeStatus',
  async ({ id, status }, { getState, rejectWithValue, dispatch }) => {
    axios.defaults.headers.common.Authorization = `Bearer ${
      getState().users.token
    }`;
    try {
      const { data } = await axios.post(`/products/changeStatus/${id}`, status);

      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();
          axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
          axios.defaults.headers.delete.withCredentials = true;
          const { data } = await axios.post(
            `/products/changeStatus/${id}`,
            status
          );
          return data;
        } catch (refreshError) {
          dispatch(logOut());
          Notiflix.Notify.info('Ваша авторизація застаріла, авторизуйтесь');
          dispatch(toggleModalAuth(true));
          // return rejectWithValue('Token refresh failed');
        }
      }
      console.log('errorFavoriteProduct', error);
      return rejectWithValue(error.message);
    }
  }
);
export const changeStatusSoldProduct = createAsyncThunk(
  '/purchase/changeStatus',
  async ({ id, status }, { getState, rejectWithValue, dispatch }) => {
    axios.defaults.headers.common.Authorization = `Bearer ${
      getState().users.token
    }`;
    try {
      const { data } = await axios.post(`/purchase/changeStatus/${id}`, status);
      window.location.reload();
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          const newToken = await refreshToken();
          axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
          axios.defaults.headers.delete.withCredentials = true;
          const { data } = await axios.post(
            `/purchase/changeStatus/${id}`,
            status
          );
          return data;
        } catch (refreshError) {
          return rejectWithValue('Token refresh failed');
        }
      }
      console.log('errorFavoriteProduct', error);
      dispatch(logOut());
      Notiflix.Notify.info('Ваша авторизація застаріла, авторизуйтесь');
      dispatch(toggleModalAuth(true));
      // return rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product, { getState, rejectWithValue, dispatch }) => {
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
              withCredentials: true,
            },
          });
          return data;
        } catch (refreshError) {
          dispatch(logOut());
          Notiflix.Notify.info('Ваша авторизація застаріла, авторизуйтесь');
          dispatch(toggleModalAuth(true));
          // return rejectWithValue('Token refresh failed');
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
