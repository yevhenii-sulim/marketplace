import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import $api from '../interceptors/interceptor';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'productPage/fetchProduct',
  async id => {
    try {
      const response = await $api.get(`/products/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      window.location.href = '/marketplace/404';
    }
  }
);

export const likeComment = createAsyncThunk(
  'productPage/likeComment',
  async ({ commentId }) => {
    const response = await $api.post('/comment/like', {
      commentId,
    });
    if (response.status === 401) return;
    return response.data;
  }
);
export const dislikeComment = createAsyncThunk(
  'productPage/dislikeComment',
  async ({ commentId }) => {
    const response = await $api.post(`/comment/dislike`, {
      commentId,
    });

    if (response.status === 401) return;
    return response.data;
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
    const token = getState().users.token;

    const response = await axios.post(
      `/comment`,
      {
        parent,
        body: comment,
        product: id,
        rating,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { ...response.data, parentIndex };
  }
);

const productPageSlice = createSlice({
  name: 'productPage',
  initialState: initialState.productPage,
  reducers: {
    addToCommentsExpanded(state, { payload }) {
      state.commentsExpanded.add(payload);
    },
    deleteIdInCommentsExpanded(state, { payload }) {
      state.commentsExpanded.delete(payload);
    },

    // sortedCommentsByASC(state, { payload }) {
    //   if (Array.isArray(payload.comments)) {
    //     const sortedComments = [...payload.comments].sort((a, b) => {
    //       return new Date(a.createDate) - new Date(b.createDate);
    //     });

    //     state.product.comments = sortedComments;
    //   }
    // },
  },

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
      })
      .addCase(addComment.rejected, (state, action) => {
        state.createCommentLoading = false;
      });
  },
});

export const productPageReducer = productPageSlice.reducer;
export const {
  addToCommentsExpanded,
  deleteIdInCommentsExpanded,
  sortedCommentsByASC,
} = productPageSlice.actions;
