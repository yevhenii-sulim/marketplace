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
import { errorReducer } from './errorAuth/slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'isActivated', '_id', 'user'],
};
const persistCategory = {
  key: 'category',
  storage,
  whitelist: ['category'],
};

const rootReducer = combineReducers({
  productPage: productPageReducer,
  products: productReducer,
  modalCatalog: modalCatalogReducer,
  modalForm: modalFormReducer,
  category: categoryReducer,
  users: persistReducer(persistConfig, userAuthReducer),
  error: errorReducer,
});

const persistedReducer = persistReducer(persistCategory, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
