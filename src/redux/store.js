import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { enableMapSet } from 'immer';
import {
  persistStore,
  persistReducer,
  REGISTER,
  PURGE,
  PERSIST,
  PAUSE,
  REHYDRATE,
  FLUSH,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalCatalogReducer } from './modalCatalog/slice';
import { userAuthReducer } from './auth/slice';
import { modalFormReducer } from './modalForm/slice';
import { categoryReducer } from './category/slice';
import { productReducer } from './product/slice';
import { productPageReducer } from './productPage/productPageSlice';
import { reducerBasket } from './basket/slice';
import { modalViewAddedProductReducer } from './modalViewProduct/slice';
import { slicePosterReducer } from './myPoster/slice';
import { orderDataReducer } from './orderData/slice';
import { ratingReducer } from './rating/slice';
import { linkReducer } from './createLink/slice';
import { modalFormAuthReducer } from './modalAuth/slice';

enableMapSet();
const persistUser = {
  key: 'token',
  storage,
  whitelist: ['token', 'isActivated', '_id', 'user'],
};
const persistAllStore = {
  key: 'category',
  storage,
  whitelist: ['category', 'product', 'basket', 'poster', 'subCategory', 'link'],
};

const rootReducer = combineReducers({
  viewAddProduct: modalViewAddedProductReducer,
  productPage: productPageReducer,
  products: productReducer,
  modalCatalog: modalCatalogReducer,
  modalForm: modalFormReducer,
  modalFormAuth: modalFormAuthReducer,
  poster: slicePosterReducer,
  category: categoryReducer,
  users: persistReducer(persistUser, userAuthReducer),
  basket: reducerBasket,
  orderData: orderDataReducer,
  rating: ratingReducer,
  link: linkReducer,
});

const persistedReducer = persistReducer(persistAllStore, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['productPage.commentsExpanded'],
      },
    }),
});

export const persistor = persistStore(store);
