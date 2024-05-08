import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const urlProduct = axios.create({
  baseURL:
    'http://localhost:8080' ||
    'https://internet-shop-api-production.up.railway.app',
});

export const fetchProduct = createAsyncThunk(
  'productPage/fetchProduct',
  async id => {
    try {
      const response = await urlProduct.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const likeComment = createAsyncThunk(
  'productPage/likeComment',
  async ({ commentId, index }) => {
    try {
      const response = await urlProduct.post(
        '/comment/like',
        {
          commentId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      return { ...response.data, index };
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
);
export const dislikeComment = createAsyncThunk(
  'productPage/dislikeComment',
  async ({ commentId, index }) => {
    try {
      const response = await urlProduct.post(
        `/comment/dislike`,
        {
          commentId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return { ...response.data, index };
    } catch (error) {
      console.log(error);
    }
  }
);

export const addComment = createAsyncThunk(
  'productPage/addComment',
  async ({ comment, id }) => {
    try {
      const response = await urlProduct.post(
        `/comment`,
        {
          body: comment,
          product: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productPageSlice = createSlice({
  name: 'productPage',
  initialState: { product: {}, isLoading: true, createCommentLoading: false },
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, (state, payload) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
      state.product = payload;
      state.isLoading = false;
    });
    builder.addCase(likeComment.pending, (state, payload) => {});
    builder.addCase(likeComment.fulfilled, (state, action) => {
      const index = action.meta.arg.index;
      state.product.comments[index] = action.payload;
    });
    builder.addCase(dislikeComment.pending, (state, payload) => {});
    builder.addCase(dislikeComment.fulfilled, (state, action) => {
      const index = action.meta.arg.index;
      state.product.comments[index] = action.payload;
    });
    builder.addCase(addComment.pending, (state, payload) => {
      state.createCommentLoading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.product.comments.push(action.payload);
      state.createCommentLoading = false;
    });
  },
});

export const productPageReducer = productPageSlice.reducer;
