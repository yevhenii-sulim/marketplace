import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import $api from '../interceptors/interceptor';

export const fetchProduct = createAsyncThunk(
  'productPage/fetchProduct',
  async id => {
    try {
      const response = await $api.get(`/products/${id}`);

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
      const comments = getState().productPage.product.comments;
      const userId = getState().users._id;

      const response = await $api.post('/comment/like', {
        commentId,
      });

      return { ...response.data, comments, userId };
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
      const response = await $api.post(`/comment/dislike`, {
        commentId,
      });
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
  async ({ parent, comment, id, parentIndex, rating }) => {
    try {
      const response = await $api.post(`/comment`, {
        parent,
        body: comment,
        product: id,
        rating,
      });
      console.log(response);
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
