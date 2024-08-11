import axios from 'axios';

axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';

export const refreshToken = async () => {
  try {
    const response = await axios.get('/auth/refresh');
    return response.data.newToken;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to refresh token');
  }
};
