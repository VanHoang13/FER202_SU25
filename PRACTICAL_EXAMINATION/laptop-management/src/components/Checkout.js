import React, { useState, useEffect } from 'react';
import { Button, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/Cart')
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error('Error fetching cart:', error));
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setMessage('Your cart is empty!');
      return;
    }

    // Clear cart
    Promise.all(
      cartItems.map((item) =>
        fetch(`http://localhost:5000/Cart/${item.id}`, { method: 'DELETE' })
      )
    )
      .then(() => {
        setMessage('Checkout successful! Thank you for your purchase.');
        setCartItems([]);
        setTimeout(() => navigate('/laptops'), 2000);
      })
      .catch((error) => {
        console.error('Error during checkout:', error);
        setMessage('Checkout failed. Please try again.');
      });
  };

  return (
    <Container className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      {message && <Alert variant={message.includes('successful') ? 'success' : 'danger'}>{message}</Alert>}
      {cartItems.length > 0 && (
        <>
          <h4>Order Summary</h4>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.brand} {item.model} - {item.quantity} x {item.price} = $
                {(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <Button variant="primary" onClick={handleCheckout}>
            Confirm Purchase
          </Button>
        </>
      )}
    </Container>
  );
};

export default Checkout;