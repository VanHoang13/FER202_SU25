import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '../actions/cartActions';

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: '123456',
      name: 'Example Product',
      price: 9.99,
      description: 'This is an example product.',
      catalogs: ['catalog1', 'catalog2'],
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
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Tên:</strong> {product.name}</p>
          <p><strong>Giá:</strong> ${product.price}</p>
          <p><strong>Danh mục:</strong> {product.catalogs.join(', ')}</p>
          <div>
            <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ</button>
            <button onClick={() => handleUpdateQuantity(product.id, 2)}>
              Cập nhật số lượng (ví dụ: 2)
            </button>
            <button onClick={() => handleRemoveFromCart(product.id)}>Xóa khỏi giỏ</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;