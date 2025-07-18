import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../actions/cartActions';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  // Tính tổng giá trị giỏ hàng
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity >= 0) {
      dispatch(updateQuantity(id, quantity));
    }
  };

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <p><strong>ID:</strong> {item.id}</p>
                  <p><strong>Tên:</strong> {item.name}</p>
                  <p><strong>Giá:</strong> ${item.price.toFixed(2)}</p>
                  <p><strong>Số lượng:</strong>
                    <button className="quantity-btn dec" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button className="quantity-btn inc" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </p>
                  <p><strong>Danh mục:</strong> {item.catalogs.join(', ')}</p>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item.id)}>Xóa</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Tổng cộng: ${total}</h3>
          </div>
        </>
      )}
      <Link to="/" className="back-link">Quay lại danh sách</Link>
    </div>
  );
};

export default CartPage;