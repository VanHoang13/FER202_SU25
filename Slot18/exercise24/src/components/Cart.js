import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p><strong>ID:</strong> {item.id}</p>
              <p><strong>Tên:</strong> {item.name}</p>
              <p><strong>Giá:</strong> ${item.price}</p>
              <p><strong>Số lượng:</strong> {item.quantity}</p>
              <p><strong>Danh mục:</strong> {item.catalogs.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;