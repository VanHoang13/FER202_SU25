import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/LaptopDetail.css';

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/Laptops/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Laptop not found');
        }
        return res.json();
      })
      .then((data) => {
        setLaptop(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching laptop:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading laptop details...</div>;
  }

  if (error) {
    return <div className="not-found">🔍 {error}</div>;
  }

  if (!laptop) {
    return <div className="not-found">🔍 Laptop not found!</div>;
  }

  return (
    <div className="laptop-detail-container">
      <h2 className="laptop-detail-title">{laptop.brand} {laptop.model}</h2>
      <div className="laptop-detail-content">
        <div className="laptop-image-container">
          <img src={process.env.PUBLIC_URL + laptop.image} alt={laptop.model} className="laptop-image" />
        </div>
        <div className="laptop-info">
          <div className="info-item">
            <span className="info-label">📅 Year:</span>
            <span className="info-value">{laptop.year}</span>
          </div>
          <div className="info-item price-item">
            <span className="info-label">💰 Price:</span>
            <span className="info-value">{laptop.price}</span>
          </div>
          <div className="info-item">
            <span className="info-label">🏢 Brand:</span>
            <span className="info-value">{laptop.brand}</span>
          </div>
          <div className="info-item">
            <span className="info-label">💻 Model:</span>
            <span className="info-value">{laptop.model}</span>
          </div>
        </div>
        {laptop.description && (
          <div className="description-container">
            <h3 className="description-title">📝 Description</h3>
            <div className="description-content">{laptop.description}</div>
          </div>
        )}
      </div>
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
  }),
};

export default LaptopDetail;