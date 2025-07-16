import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/Login.css'; 
const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:5000/UserAccounts')
      .then((res) => res.json())
      .then((data) => {
        const user = data.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          setUser(user);
          setShowModal(true);
          setError('');
        } else {
          setError('Invalid username or password!');
        }
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <Form className="login-form">
        <Form.Group className="form-group">
          <Form.Label className="form-label">Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Enter your username"
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button onClick={handleLogin} className="login-btn">
          Login
        </Button>
      </Form>
      {error && <div className="error-message">{error}</div>}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>🎉 Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome, {username}! Login successful!</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;