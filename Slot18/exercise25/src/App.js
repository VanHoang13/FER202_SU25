// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Giỏ hàng</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Danh sách sản phẩm</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Giỏ hàng</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-product">Thêm sản phẩm</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5 pt-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-product" element={<ProductForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;