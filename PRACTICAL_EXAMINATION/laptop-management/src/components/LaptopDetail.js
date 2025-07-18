import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/LaptopDetail.css';

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    console.log('Fetching laptop with id:', id); // Debug log
    fetch(`http://localhost:5000/Laptops/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Laptop not found');
        return res.json();
      })
      .then((data) => {
        setLaptop(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading laptop details...</div>;
  if (error) return <div className="not-found">🔍 {error} (ID: {id})</div>;
  if (!laptop) return <div className="not-found">🔍 Laptop not found!</div>;

  return (
    <div className="laptop-detail-container">
      <h2 className="laptop-detail-title">{laptop.brand} {laptop.model}</h2>
      <Card className="laptop-card">
        <Row>
          <Col md={6}>
            <Card.Img
              src={process.env.PUBLIC_URL + laptop.image}
              alt={laptop.model}
              className="laptop-image"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Text><strong>📅 Year:</strong> {laptop.year}</Card.Text>
              <Card.Text><strong>💰 Price:</strong> {laptop.price}</Card.Text>
              <Card.Text><strong>🏢 Brand:</strong> {laptop.brand}</Card.Text>
              <Card.Text><strong>💻 Model:</strong> {laptop.model}</Card.Text>
              {laptop.description && (
                <Card.Text>
                  <strong>📝 Description:</strong> {laptop.description}
                </Card.Text>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

LaptopDetail.propTypes = {
  laptop: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    price: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default LaptopDetail;