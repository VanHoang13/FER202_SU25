import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    fetch('http://localhost:5000/Cart')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch cart');
        return res.json();
      })
      .then((data) => {
        setCartItems(data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching cart:', error);
        setError('Unable to load cart. Please try again.');
      });
  };

  const handleRemoveFromCart = (id) => {
    fetch(`http://localhost:5000/Cart/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to remove from cart');
        fetchCart();
      })
      .catch((error) => {
        console.error('Error removing from cart:', error);
        setError('Failed to remove item. Please try again.');
      });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    fetch(`http://localhost:5000/Cart/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to update quantity');
        fetchCart();
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
        setError('Failed to update quantity. Please try again.');
      });
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  return (
    <Container className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>
      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
      {cartItems.length === 0 ? (
        <Card className="empty-cart-card">
          <Card.Body>
            <p className="empty-cart-text">Your cart is empty. Start shopping now!</p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/laptops')}
              className="go-to-store-btn"
            >
              Go to Store
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <>
          <Card className="cart-card">
            <Card.Body>
              <Table striped bordered hover responsive className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="cart-item-name">
                          {item.brand} {item.model}
                        </div>
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <div className="quantity-control">
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="quantity-btn"
                          >
                            -
                          </Button>
                          <span className="quantity-value mx-3">{item.quantity}</span>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="remove-btn"
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card className="cart-summary-card mt-4">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h4 className="total-text">Total: ${totalPrice.toFixed(2)}</h4>
                </Col>
                <Col md={6} className="text-end">
                  <Button
                    variant="success"
                    size="lg"
                    onClick={handleCheckout}
                    className="checkout-btn"
                  >
                    Proceed to Checkout
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Cart;