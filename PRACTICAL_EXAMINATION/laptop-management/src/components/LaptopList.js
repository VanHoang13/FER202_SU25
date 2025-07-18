import React, { useState, useEffect } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/LaptopList.css';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = () => {
    fetch('http://localhost:5000/Laptops')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch laptops');
        return res.json();
      })
      .then((data) => setLaptops(data))
      .catch((error) => console.error('Error fetching laptops:', error));
  };

  const handleSearch = () => {
    fetch('http://localhost:5000/Laptops')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch laptops');
        return res.json();
      })
      .then((data) =>
        setLaptops(
          data.filter((laptop) =>
            laptop.brand.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      )
      .catch((error) => console.error('Error searching laptops:', error));
  };

  const handleAddToCart = (laptop) => {
    if (!laptop || laptop.quantity <= 0) {
      alert(laptop.quantity <= 0 ? 'This laptop is out of stock!' : 'Invalid laptop data!');
      return;
    }

    console.log('Adding to cart:', laptop.id); // Debug log

    // Add to Cart
    fetch('http://localhost:5000/Cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: Date.now(), // Unique ID for cart item
        laptopId: laptop.id,
        brand: laptop.brand,
        model: laptop.model,
        price: laptop.price,
        quantity: 1,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to add to cart');
        return res.json();
      })
      .then(() => {
        // Reduce quantity in Laptops
        fetch(`http://localhost:5000/Laptops/${laptop.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: laptop.quantity - 1 }),
        })
          .then((res) => {
            if (!res.ok) throw new Error('Failed to update quantity');
            fetchLaptops(); // Refresh laptop list
          })
          .catch((error) => console.error('Error updating quantity:', error));
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
        alert('Failed to add to cart. Please try again.');
      })
      .finally(() => navigate('/cart')); // Redirect to Cart after process
  };

  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price; // Giữ nguyên format gốc như "$999"
    }
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <div className="laptop-list-container">
      <h2 className="laptop-list-title">Laptop Collection</h2>
      
      <Form.Group className="search-container mb-4">
        <Form.Control
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by brand..."
          className="search-input"
        />
        <Button onClick={handleSearch} className="search-btn ms-2">
          🔍 Search
        </Button>
      </Form.Group>

      <div className="laptop-grid">
        {laptops.length > 0 ? (
          laptops.map((laptop) => (
            <Card key={laptop.id} className="laptop-card">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + laptop.image}
                alt={`${laptop.brand} ${laptop.model}`}
                className="laptop-image"
              />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text className="year-text">Year: {laptop.year}</Card.Text>
                <Card.Text className="price-text">
                  {formatPrice(laptop.price)}
                </Card.Text>
                <Card.Text className="stock-text">
                  Stock: {laptop.quantity > 0 ? `${laptop.quantity} available` : 'Out of stock'}
                </Card.Text>
                
                <div className="btn-group">
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/laptops/${laptop.id}`)}
                    className="w-100"
                  >
                    View Details →
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => handleAddToCart(laptop)}
                    className="w-100 mt-2"
                    disabled={laptop.quantity <= 0}
                  >
                    {laptop.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="no-laptops">
            No laptops found. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
};

export default LaptopList;