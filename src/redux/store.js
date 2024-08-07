import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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
import { sliceOrderReducer } from './myOrder/slice';
import { orderDataReducer } from './orderData/slice';
import { enableMapSet } from 'immer';

enableMapSet();
const persistUser = {
  key: 'token',
  storage,
  whitelist: ['token', 'isActivated', '_id', 'user'],
};
const persistAllStore = {
  key: 'category',
  storage,
  whitelist: ['category', 'product', 'basket', 'poster', 'subCategory'],
};

const rootReducer = combineReducers({
  viewAddProduct: modalViewAddedProductReducer,
  productPage: productPageReducer,
  products: productReducer,
  modalCatalog: modalCatalogReducer,
  modalForm: modalFormReducer,
  poster: slicePosterReducer,
  openModalBasket: sliceOrderReducer,
  category: categoryReducer,
  users: persistReducer(persistUser, userAuthReducer),
  basket: reducerBasket,
  orderData: orderDataReducer,
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
