import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <h1>Ứng dụng giỏ hàng với Redux</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;