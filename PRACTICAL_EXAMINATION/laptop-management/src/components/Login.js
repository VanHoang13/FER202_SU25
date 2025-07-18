import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import '../styles/Login.css';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }
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
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
            required
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </Form.Group>
        <Button onClick={handleLogin} className="login-btn">
          Login
        </Button>
      </Form>
      {error && <Alert variant="danger" className="error-message">{error}</Alert>}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
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
  username: PropTypes.string,
  password: PropTypes.string,
};

export default Login;