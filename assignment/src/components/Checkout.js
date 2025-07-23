import React, { useState } from 'react';
import { Button, Alert, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Không cần useNavigate nữa vì dùng Link
import '../styles/Checkout.css';

const Checkout = ({ cart, clearCart }) => {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.currentPrice.replace('.', '')) * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setMessage('Giỏ hàng của bạn trống!');
      return;
    }

    if (!formData.name || !formData.address || !formData.email || !formData.phone) {
      setMessage('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    setMessage('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
    setIsCheckedOut(true);

    // Delay clearCart và reset message để hiển thị thông báo trước
    setTimeout(() => {
      clearCart();
      setMessage(''); // Xóa message sau khi thành công
    }, 2000); // 2 giây delay
  };

  return (
    <Container className="checkout-container">
      <h2 className="checkout-title">Giỏ Hàng</h2>
      {message && <Alert variant={message.includes('thành công') ? 'success' : 'danger'}>{message}</Alert>}
      
      {isCheckedOut ? (
        <div>
          <p>Đơn hàng của bạn đã được xử lý. <Link to="/">Tiếp tục mua sắm</Link></p>
        </div>
      ) : cart.length > 0 ? (
        <>
          <h4>Thông tin người nhận</h4>
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

          <h4 className="mt-4">Tóm tắt đơn hàng</h4>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x {item.currentPrice} = {(parseFloat(item.currentPrice.replace('.', '')) * item.quantity).toLocaleString()} VNĐ
              </li>
            ))}
          </ul>
          <h4>Tổng cộng: {totalPrice.toLocaleString()} VNĐ</h4>
          <Button variant="primary" onClick={handleCheckout}>
            Xác nhận mua hàng
          </Button>
        </>
      ) : (
        <p>Giỏ hàng trống. <Link to="/">Tiếp tục mua sắm</Link></p>
      )}
    </Container>
  );
};

export default Checkout;