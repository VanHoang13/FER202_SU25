// src/components/Login.js
import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    if (!username || !password) {
      setMessage("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      return;
    }

    try {
      // Gọi API để kiểm tra user trong db.json
      const res = await axios.get(`http://localhost:3000/useraccounts`, {
        params: { username, password }
      });

      if (res.data.length > 0) {
        setMessage(`Login successfully with username: ${username}`);
        setTimeout(() => navigate("/posts"), 1500);
      } else {
        setMessage("Tên đăng nhập hoặc mật khẩu không đúng.");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      setMessage("Đã xảy ra lỗi khi đăng nhập.");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "500px" }}>
      <h2 className="mb-3">Đăng nhập</h2>
      {message && <Alert variant={message.includes("successfully") ? "success" : "danger"}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Đăng nhập</Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
};

export default Login;