import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const refreshToken = async () => {
  try {
    const response = await axios.get('/auth/refresh');
    return response.data.newToken;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to refresh token');
  }
};
