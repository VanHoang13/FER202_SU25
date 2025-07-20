// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import từ react-dom/client
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);