// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Giỏ hàng trống</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cartItems.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Giá: ${item.price.toFixed(2)}</p>
                  <p className="card-text">
                    Danh mục: {item.catalogs.join(', ')}
                  </p>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;