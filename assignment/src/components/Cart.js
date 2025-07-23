import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Alert, Card, Row, Col, Form } from 'react-bootstrap';
import '../styles/Cart.css';

const Cart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const [message, setMessage] = useState('');
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [showForm, setShowForm] = useState(false); // State mới để hiển thị form chỉ sau khi bấm Thanh toán
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.currentPrice.replace('.', '')) * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowForm = () => {
    if (cart.length === 0) {
      setMessage('Giỏ hàng của bạn trống!');
      return;
    }
    setShowForm(true); // Hiển thị form khi bấm Thanh toán
    setMessage(''); // Xóa message lỗi nếu có
  };

  const handleConfirmCheckout = () => {
    // Kiểm tra form đầy đủ
    if (!formData.name || !formData.address || !formData.email || !formData.phone) {
      setMessage('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    setMessage('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
    setIsCheckedOut(true);

    // Delay clearCart để hiển thị thông báo trước
    setTimeout(() => {
      clearCart();
      setMessage('');
      setIsCheckedOut(false);
      setShowForm(false); // Reset form hiển thị
      setFormData({ name: '', address: '', email: '', phone: '' }); // Reset dữ liệu form
    }, 3000); // 3 giây delay
  };

  return (
    <div className="cart">
      <h2 className="cart-title">Giỏ Hàng</h2>
      {message && <Alert variant={message.includes('thành công') ? 'success' : 'danger'}>{message}</Alert>}
      {isCheckedOut ? (
        <p>Đơn hàng của bạn đã được xử lý. <Link to="/">Tiếp tục mua sắm</Link></p>
      ) : cart.length === 0 ? (
        <p>Giỏ hàng trống. <Link to="/">Tiếp tục mua sắm</Link></p>
      ) : (
        <>
          {cart.map((item) => (
            <Card key={item.id} className="cart-item">
              <Row className="align-items-center">
                <Col xs={3}>
                  <img src={`/images/${item.image}`} alt={item.name} className="cart-image" />
                </Col>
                <Col xs={6}>
                  <div className="cart-info">
                    <h5>{item.name}</h5>
                    <p>Giá: {item.currentPrice} VNĐ</p>
                  </div>
                </Col>
                <Col xs={3} className="cart-actions">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="quantity-input"
                  />
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    Xóa
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
          <div className="cart-total">
            <h4>Tổng cộng: <strong>{totalPrice.toLocaleString()} VNĐ</strong></h4>
          </div>

          {showForm ? (
            <>
              <h4 className="mt-4">Thông tin người nhận</h4>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Họ và tên</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nhập họ và tên"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Nhập email"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Số điện thoại</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Nhập số điện thoại"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Địa chỉ nhận hàng</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Nhập địa chỉ"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <div className="cart-actions mt-3">
                <Button variant="primary" onClick={handleConfirmCheckout} className="checkout-btn">
                  Xác nhận thanh toán
                </Button>
                <Button variant="secondary" onClick={() => setShowForm(false)} className="ml-2">
                  Hủy
                </Button>
              </div>
            </>
          ) : (
            <div className="cart-actions">
              <Button variant="primary" onClick={handleShowForm} className="checkout-btn">
                Thanh toán
              </Button>
              <Link to="/" className="continue-shopping">
                Tiếp tục mua sắm
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;