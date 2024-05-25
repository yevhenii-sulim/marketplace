import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (id, { getState }) => {
    try {
      const { data } = await axios.patch(
        `/basket/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getState().users.token}`,
          },
        }
      );
      return data.basket;
    } catch (error) {
      if (error.response.data.message === 'Unauthorized') {
        Notiflix.Notify.info('Необхідно авторизуватися', {
          timeout: 6000,
        });
      }

      console.log('error', error.response.data.message);
    }
  }
);
