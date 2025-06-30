import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      navigate('/posts');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      {error && <div className="alert alert-danger text-center">{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control   type="email"  value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            required  />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password"   value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required  />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100"> Login </Button>
      </Form>
    </div>
  );
}

export default Login;