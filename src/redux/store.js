import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { modalCotalogReducer } from './slice';

const rootReducer = combineReducers({
  modalCotalog: modalCotalogReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
