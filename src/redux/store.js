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
import { modalCotalogReducer } from './slice';
import { userAuthReduser } from './auth/slice';
import { modalFormReducer } from './modalForm/slice';
import { categoryReducer } from './category/slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistCategory = {
  key: 'category',
  storage: storage,
  whitelist: ['categoryProduct'],
};
const rootReducer = combineReducers({
  category: persistReducer(persistCategory, categoryReducer),
  // category: categoryReducer,
  modalCotalog: modalCotalogReducer,
  modalForm: modalFormReducer,
  users: persistReducer(persistConfig, userAuthReduser),
  // users: userAuthReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
