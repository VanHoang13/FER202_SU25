// src/components/ProductList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh sách sản phẩm</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Giá: ${product.price.toFixed(2)}</p>
                <p className="card-text">
                  Danh mục: {product.catalogs.join(', ')}
                </p>
                <p className="card-text text-muted">{product.description}</p>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;