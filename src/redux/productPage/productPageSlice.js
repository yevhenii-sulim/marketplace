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
  async ({ commentId }, { getState }) => {
    try {
      const token = getState().users.token;
      const comments = getState().productPage.product.comments;
      const userId = getState().users._id;

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

      return { ...response.data, comments, userId };
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

// const findAndUpdate = (idUser, idComment, likeAction, comments) => {
//   const { _id, like, dislike, comments: nestedComments } = comments;

//   if (_id === idComment) {
//     if (likeAction === 'like') {
//       if (!like) {
//         comments.like = [idUser];
//       } else if (!like.includes(idUser)) {
//         comments.like.push(idUser);
//       } else {
//         comments.like = like.filter(likeId => likeId !== idUser);
//       }
//       // Видаляємо дизлайк, якщо він вже встановлений для цього користувача
//       if (dislike && dislike.includes(idUser)) {
//         comments.dislike = dislike.filter(dislikeId => dislikeId !== idUser);
//       }
//     } else if (likeAction === 'dislike') {
//       if (!dislike) {
//         comments.dislike = [idUser];
//       } else if (!dislike.includes(idUser)) {
//         comments.dislike.push(idUser);
//       } else {
//         comments.dislike = dislike.filter(dislikeId => dislikeId !== idUser);
//       }
//       // Видаляємо лайк, якщо він вже встановлений для цього користувача
//       if (like && like.includes(idUser)) {
//         comments.like = like.filter(likeId => likeId !== idUser);
//       }
//     }
//   }

//   if (nestedComments?.length > 0) {
//     nestedComments.forEach(nestedComment => {
//       findAndUpdate(idUser, idComment, likeAction, nestedComment);
//     });
//   }
//   return comments;
// };

export const addComment = createAsyncThunk(
  'productPage/addComment',
  async ({ parent, comment, id, parentIndex, rating }, { getState }) => {
    try {
      const token = getState().users.token;
      const response = await urlProduct.post(
        `/comment`,
        {
          parent,
          body: comment,
          product: id,
          rating,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlZXNzczEyN0B1a3IubmV0Iiwic3ViIjoiNjY2Yzk3NWY2MGJhZTA4OTQ0MDU4YzU3IiwiaWQiOiI2NjZjOTc1ZjYwYmFlMDg5NDQwNThjNTciLCJpYXQiOjE3MTkzODg5NTEsImV4cCI6MTcxOTQ3NTM1MX0.OON6EsWVMUUvtl0hDDr_7KT-RLBLRFwfYaIsBRKdfu0`,
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
        state.product.comments = action.payload;
      })
      .addCase(dislikeComment.pending, (state, payload) => {})
      .addCase(dislikeComment.fulfilled, (state, action) => {
        state.product.comments = action.payload;
      })
      .addCase(addComment.pending, (state, payload) => {
        state.createCommentLoading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { parentIndex, ...newComment } = action.payload;

        if (!newComment.parent) {
          state.product.comments.unshift(newComment);
        } else {
          state.product.comments[parentIndex].comments.push(newComment);
        }
        state.createCommentLoading = false;
      });
  },
});

export const productPageReducer = productPageSlice.reducer;
