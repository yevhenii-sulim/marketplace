import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const privatInstans = axios.create({
  baseURL: 'https://internet-shop-api.onrender.com',
});
const publicInstans = axios.create({
  baseURL: 'https://internet-shop-api.onrender.com',
});

const token = {
  set(token) {
    privatInstans.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    privatInstans.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk('user/addUser', async user => {
  console.log(user);

  try {
    const data = await publicInstans.post('/auth/registration', user);
    console.log(data);

    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logIn = createAsyncThunk(
  'user/enterUser',
  async (user, { dispatch }) => {
    try {
      const { data } = await publicInstans.post('/auth/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const logOut = createAsyncThunk('user/exitUser', async () => {
  try {
    await privatInstans.post('/auth/logout');
    token.unSet();
  } catch (error) {
    console.log(error.message);
  }
});

export const update = createAsyncThunk('user/update', async (_, thuncApi) => {
  const storThunc = thuncApi.getState();
  const presentToken = storThunc.users.token;
  if (presentToken) {
    try {
      token.set(presentToken);
      const { data } = await privatInstans.get('/auth/refresh');
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  return;
});
