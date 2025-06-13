import React from 'react';
import ProductListCheckbox from './components/ProductListCheckbox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <h1>Danh sách sản phẩm với Checkbox</h1>
      <ProductListCheckbox />
    </div>
  );
}

export default App;