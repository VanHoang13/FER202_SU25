import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Thêm BrowserRouter
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Đảm bảo import Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);