import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { getProducts, prevSearchProduct, searchProduct } from './thunk';

const handlePending = state => {
  state.isLoading = false;
  state.totalPage = 0;
};
const handlePendingSearchPrev = state => {
  state.isLoadingSearch = false;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = true;
  state.product = payload.products;
  state.filters = payload.filters;
  state.totalPage = payload.totalPages;
};

const handleSearchFulfilled = (state, { payload }) => {
  state.search = payload;
};
const handlePrevSearchFulfilled = (state, { payload }) => {
  state.prevSearch = payload;
  state.isLoadingSearch = true;
};
const handleRejected = state => {};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.products,
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, handlePending)
      .addCase(getProducts.fulfilled, handleFulfilled)
      .addCase(getProducts.rejected, handleRejected)
      .addCase(searchProduct.fulfilled, handleSearchFulfilled)
      .addCase(prevSearchProduct.fulfilled, handlePrevSearchFulfilled)
      .addCase(prevSearchProduct.pending, handlePendingSearchPrev);
  },
});

export const productReducer = productSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface InitialState {
//   isNextClicked: boolean;
// }

// const initialState: InitialState = {
//   isNextClicked: false,
// };

// export const editTenderSlice = createSlice({
//   name: 'editTender',
//   initialState,
//   reducers: {
//     setIsNextClicked(state, { payload }: PayloadAction<boolean>) {
//       state.isNextClicked = payload;
//     },
//   },
// });

// export const { setIsNextClicked } = editTenderSlice.actions;

// export default editTenderSlice.reducer;
