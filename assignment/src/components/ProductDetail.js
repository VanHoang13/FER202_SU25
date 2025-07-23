import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';
import '../styles/ProductDetail.css';

const ProductDetail = ({ products, addToCart, updateProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
    setEditedProduct(foundProduct || {});
  }, [id, products]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editedProduct.name || !editedProduct.description || !editedProduct.price || !editedProduct.currentPrice || !editedProduct.image) {
      setError('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    updateProduct(editedProduct);
    setIsEditing(false);
    setError(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  if (!product) {
    return <p>Đang tải...</p>;
  }

  return (
    <div className="product-detail">
      <img src={`/images/${product.image}`} alt={product.name} className="detail-image" />
      <div className="detail-info">
        {isEditing ? (
          <>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={editedProduct.name || ''}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={editedProduct.description || ''}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Giá gốc</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={editedProduct.price || ''}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Giá hiện tại</Form.Label>
                <Form.Control
                  type="text"
                  name="currentPrice"
                  value={editedProduct.currentPrice || ''}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ảnh</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={editedProduct.image || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button variant="success" onClick={handleSave} className="me-2">
              Lưu
            </Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>
              Hủy
            </Button>
          </>
        ) : (
          <>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              Giá gốc: <span className="original-price">{product.price}</span><br />
              Giá hiện tại: <span className="current-price">{product.currentPrice}</span>
            </p>
            <Button variant="primary" onClick={handleEdit}>
              Sửa
            </Button>
            <Button variant="info" onClick={() => addToCart(product)} className="ms-2">
              Thêm vào giỏ hàng
            </Button>
            <Button variant="secondary" onClick={() => navigate('/')} className="ms-2">
              Quay lại
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;