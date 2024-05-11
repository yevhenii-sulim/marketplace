import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import { toggleModalForm } from '../modalForm/slice';
import { hideError, showError } from '../errorAuth/slice';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const privatInstans = axios.create({
  baseURL: 'https://internet-shop-api-production.up.railway.app',
  signal: new AbortController().signal,
});
const publicInstans = axios.create({
  baseURL: 'https://internet-shop-api-production.up.railway.app',
  signal: new AbortController().signal,
});

const token = {
  set(token) {
    privatInstans.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    privatInstans.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'user/addUser',
  async (user, { dispatch }) => {
    try {
      const { data } = await publicInstans.post('/auth/registration', user);
      token.set(data.accessJwt);
      dispatch(toggleModalForm(false));

      Notiflix.Notify.success('You have successfully registered');
      return data;
    } catch (error) {
      dispatch(showError(error.response.data.errors));
      setTimeout(() => dispatch(hideError()), 3000);
    }
  }
);

export const restorePassword = createAsyncThunk(
  'user/restorePassword',
  async (user, { dispatch }) => {
    try {
      const { data } = await publicInstans.post('/auth/forgotPassword', user);
      dispatch(toggleModalForm(false));

      Notiflix.Notify.success('You have successfully registered');
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/enterUser',
  async (user, { dispatch }) => {
    try {
      const { data } = await publicInstans.post('/auth/login', user);
      window.location.reload();
      if (!data.user.isActivated) {
        Notiflix.Notify.failure(
          'Your mail is not activated. Please activate your registration using the link you received in your mail',
          {
            timeout: 6000,
          }
        );
      }
      token.set(data.backend_tokens.token);
      dispatch(toggleModalForm(false));
      return data;
    } catch (error) {
      error.response.data.message
        ? Notiflix.Notify.failure('Неправильний логін або пароль', {
            timeout: 6000,
          })
        : Notiflix.Notify.failure(error.message, {
            timeout: 6000,
          });
      console.log(error);
    }
  }
);

export const logOut = createAsyncThunk('user/exitUser', async () => {
  try {
    await privatInstans.post('/auth/logout');
    localStorage.clear();
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
      const data = await privatInstans.get('/auth/refresh');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  return;
});
