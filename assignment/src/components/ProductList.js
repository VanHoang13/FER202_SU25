import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Thêm useNavigate
import '../styles/ProductList.css';

const ProductList = ({ products, addToCart }) => {
  const navigate = useNavigate(); // Khởi tạo hook navigate

  if (!products) {
    return <p>Đang tải...</p>;
  }

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Không có sản phẩm.</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
            </Link>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description.substring(0, 100)}...</p>
            <p className="product-price">
              <span className="original-price">{product.price}</span>{' '}
              <span className="current-price">{product.currentPrice}</span>
            </p>
            <div className="product-actions">
              <button 
                onClick={() => {
                  addToCart(product); // Gọi hàm thêm vào giỏ hàng
                  navigate('/cart'); // Chuyển hướng đến trang giỏ hàng
                }}
              >
                Thêm vào giỏ hàng
              </button>
              <Link to={`/product/${product.id}`} className="detail-button">Chi tiết</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;