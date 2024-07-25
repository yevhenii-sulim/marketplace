import axios from 'axios';

export const API_URL = 'https://internet-shop-api-production.up.railway.app';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(config => {
  const storage = localStorage.getItem('persist:token');

  const parsedStorage = JSON.parse(storage);

  const rawToken = parsedStorage.token;

  let tokenValue = rawToken.replace(/^"|"$/g, '');

  tokenValue = tokenValue === 'null' ? null : tokenValue ? tokenValue : null;

  config.headers.Authorization = `Bearer ${tokenValue}`;

  return config;
});

$api.interceptors.response.use(
  config => {
    return config;
  },
  async err => {
    const originalRequest = err.config;

    if (Number(err.response.status) === 401 && originalRequest) {
      try {
        const response = await axios.get(API_URL + '/auth/refresh', {
          withCredentials: true,
        });

        const storage = JSON.parse(localStorage.getItem('persist:token'));

        const newToken = `\"${response.data}\"`;
        storage.token = newToken;
        localStorage.setItem('persist:token', JSON.stringify(storage));

        return $api.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }

    throw err.response.data.message;
  }
);

export default $api;
