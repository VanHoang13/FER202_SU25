// src/components/ProductForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/cartActions';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...product,
        price: parseFloat(product.price),
        catalogs: product.catalogs.split(',').map((cat) => cat.trim()),
      })
    );
    setProduct({ name: '', price: '', description: '', catalogs: '' });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Thêm sản phẩm mới</h2>
      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Giá</label>
            <input
              type="number"
              className="form-control"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mô tả</label>
            <textarea
              className="form-control"
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Danh mục (cách nhau bằng dấu phẩy)</label>
            <input
              type="text"
              className="form-control"
              value={product.catalogs}
              onChange={(e) => setProduct({ ...product, catalogs: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Thêm sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;