import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <div className="card p-4 shadow-lg border-light">
            <h2 className="mb-4">Count: {count}</h2>
            <Button 
              variant="success" 
              onClick={() => setCount(count + 1)}
              className="w-100 py-3"
            >
              Increment
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
