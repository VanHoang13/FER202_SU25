// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slices/quizSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;