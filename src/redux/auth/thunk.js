import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { toggleModalAuth } from '../modalAuth/slice';
axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';

axios.defaults.headers.post.withCredentials = true;
axios.defaults.headers.get.withCredentials = true;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'user/addUser',
  async (user, { dispatch }) => {
    try {
      const { data } = await axios.post('/auth/registration', user);

      token.set(data.accessJwt);

      Notiflix.Notify.success(
        'Підтвердіть свою електронну адресу, щоб мати можливість продавати та купувати товари на нашому маркетплейсі'
      );

      dispatch(toggleModalAuth(false));
      return data;
    } catch (error) {
      console.log(error.response.data.errors);
      error.response.data.errors.forEach(({ message }) =>
        Notiflix.Notify.failure(`${message}`)
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'user/enterUser',
  async (user, { dispatch }) => {
    try {
      const { data } = await axios.post('/auth/login', user, {
        withCredentials: true,
      });
      token.set(data.tokens.accessJwt);
      if (!data.user.isActivated) {
        Notiflix.Notify.failure(
          'Ваша електронна адреса не підтверджена. Будь ласка, перевірте свою пошту та підтвердьте електронну адресу'
        );
        return;
      }
      dispatch(toggleModalAuth(false));
      return data;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('Неправильний логін або пароль');
      console.log(error);
    }
  }
);

export const sendQueryRestorePassword = createAsyncThunk(
  'user/sendQueryRestorePassword',
  async (user, { dispatch }) => {
    try {
      const { data } = await axios.post('/auth/forgotPassword', user);

      Notiflix.Notify.success(
        'Ми відправили інформацію для відновлення паролю вам на ел. пошту'
      );
      dispatch(toggleModalAuth(false));
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      console.log('error', error);
    }
  }
);

export const restorePassword = createAsyncThunk(
  'user/restorePassword',
  async password => {
    const tokenIndex = window.location.href.indexOf('token=');
    const token = window.location.href.slice(
      tokenIndex + 6,
      window.location.href.length
    );

    try {
      const data = await axios.post('/auth/changePassword', password, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      window.location.href = '/marketplace';
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message[0]);
      console.log('error', error);
    }
  }
);

export const logOut = createAsyncThunk('user/exitUser', async () => {
  try {
    await axios.get('/auth/logout');
    token.unSet();
  } catch (error) {
    console.log(error.message);
  }
});

export const update = createAsyncThunk('user/update', async (_, thunkApi) => {
  const storThunk = thunkApi.getState();

  const presentToken = storThunk.users.token;
  if (presentToken) {
    try {
      token.set(presentToken);
      const { data } = await axios.get('/auth/refresh');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  return;
});

export const getUser = createAsyncThunk('myUser/getUser', async user => {
  try {
    const { data } = await axios.get(`/user/${user}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});
