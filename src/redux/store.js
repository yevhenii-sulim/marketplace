import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { modalCotalogReducer } from './slice';
import { userAuthReduser } from './auth/slice';

const rootReducer = combineReducers({
  modalCotalog: modalCotalogReducer,
  isUserAuth: userAuthReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});
