// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm import này nếu cần

const root = createRoot(document.getElementById('root'));
root.render(<App />);