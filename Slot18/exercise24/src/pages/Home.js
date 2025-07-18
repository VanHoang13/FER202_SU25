import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();

  const products = [
    { 
      id: '123456', 
      name: 'Dell XPS 13', 
      price: 1299.99, 
      catalogs: ['laptop', 'premium'], 
      image: '/images/dell-xps13.jpg' 
    },
    { 
      id: '123457', 
      name: 'HP Spectre', 
      price: 1499.99, 
      catalogs: ['laptop', 'ultrabook'], 
      image: '/images/hp-spectre.jpg' 
    },
    { 
      id: '123458', 
      name: 'Lenovo ThinkPad', 
      price: 1099.99, 
      catalogs: ['laptop', 'business'], 
      image: '/images/lenovo-thinkpad.jpg' 
    },
    { 
      id: '123459', 
      name: 'MacBook Pro', 
      price: 1799.99, 
      catalogs: ['laptop', 'apple'], 
      image: '/images/macbook-pro.jpg' 
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity >= 0) {
      dispatch(updateQuantity(id, quantity));
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <p><span className="label">ID:</span> <span className="value">{product.id}</span></p>
              <p><span className="label">Tên:</span> <span className="value">{product.name}</span></p>
              <p><span className="label">Giá:</span> <span className="value">${product.price.toFixed(2)}</span></p>
              <p><span className="label">Danh mục:</span> <span className="value">{product.catalogs.join(', ')}</span></p>
            </div>
            <div className="button-group">
              <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ</button>
              <button onClick={() => handleUpdateQuantity(product.id, 2)}>
                Cập nhật số lượng (2)
              </button>
              <button onClick={() => handleRemoveFromCart(product.id)}>Xóa khỏi giỏ</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart" className="cart-link">Xem giỏ hàng</Link>
    </div>
  );
};

export default Home;