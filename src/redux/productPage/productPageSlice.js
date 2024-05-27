import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from '../initialState';

const urlProduct = axios.create({
  withCredentials: true,
  baseURL: 'https://internet-shop-api-production.up.railway.app',
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
  async ({ commentId, index }, { getState }) => {
    try {
      const token = getState().users.token;
      const response = await urlProduct.post(
        '/comment/like',
        {
          commentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
  async ({ commentId, index }, { getState }) => {
    try {
      const token = getState().users.token;
      const response = await urlProduct.post(
        `/comment/dislike`,
        {
          commentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
  async ({ parent, comment, id, parentIndex }, { getState }) => {
    try {
      const token = getState().users.token;
      const response = await axios.post(
        `/comment`,
        {
          parent,
          body: comment,
          product: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { ...response.data, parentIndex };
    } catch (error) {
      console.log(error);
    }
  }
);

const productPageSlice = createSlice({
  name: 'productPage',
  initialState: initialState.productPage,

  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, (state, payload) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.product = payload;

        state.isLoading = false;
      })
      .addCase(likeComment.pending, (state, payload) => {})
      .addCase(likeComment.fulfilled, (state, action) => {
        const index = action.meta.arg.index;
        state.product.comments[index] = action.payload;
      })
      .addCase(dislikeComment.pending, (state, payload) => {})
      .addCase(dislikeComment.fulfilled, (state, action) => {
        const index = action.meta.arg.index;
        state.product.comments[index] = action.payload;
      })
      .addCase(addComment.pending, (state, payload) => {
        state.createCommentLoading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { parentIndex, ...newComment } = action.payload;
        console.log(newComment);
        if (!newComment.parent) {
          state.product.comments.push(newComment);
        } else {
          state.product.comments[parentIndex].comments.push(newComment);
        }
        state.createCommentLoading = false;
      });
  },
});

export const productPageReducer = productPageSlice.reducer;
