// src/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Sửa dòng này
import cartReducer from './reducers/cartReducer';

const store = createStore(cartReducer, applyMiddleware(thunk));
export default store;