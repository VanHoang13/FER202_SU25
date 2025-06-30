import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  const [input, setInput] = useState('abc');
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <div className="card p-4 shadow-lg rounded">
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your text..."
                className="mb-3 p-3"
                style={{ fontSize: '16px', borderRadius: '8px' }}
              />
            </Form.Group>
            <h3 className="mt-3 text-muted">Input text: {input}</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
