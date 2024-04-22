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

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  modalCotalog: modalCotalogReducer,
  modalForm: modalFormReducer,
  users: persistReducer(persistConfig, userAuthReduser),
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
