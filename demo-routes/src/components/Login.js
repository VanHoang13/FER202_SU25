import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập xác thực: username = "admin", password = "password"
    if (formData.username === 'admin' && formData.password === 'password') {
      setError('');
      navigate('/posts'); // Điều hướng đến trang Posts
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Đăng Nhập</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nhập tên đăng nhập"
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Nhập mật khẩu"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Đăng Nhập
        </Button>
      </Form>
    </Container>
  );
}

export default Login;