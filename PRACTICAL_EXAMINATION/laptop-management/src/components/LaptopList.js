import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/LaptopList.css';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/Laptops')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch laptops');
        return res.json();
      })
      .then((data) => setLaptops(data))
      .catch((error) => console.error('Error fetching laptops:', error));
  }, []);

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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="laptop-list-container">
      <h2 className="laptop-list-title">🖥️ Laptop Collection</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search by brand..."
          className="search-input"
        />
        <Button onClick={handleSearch} className="search-btn">🔍 Search</Button>
      </div>
      <div className="laptops-grid">
        {laptops.length > 0 ? (
          laptops.map((laptop) => (
            <div key={laptop.id} className="laptop-card">
              <div className="laptop-image-container">
                <img
                  src={process.env.PUBLIC_URL + laptop.image} // Sử dụng đường dẫn từ public
                  alt={`${laptop.brand} ${laptop.model}`}
                  className="laptop-image"
                />
              </div>
              <h3 className="laptop-title">{laptop.brand} {laptop.model}</h3>
              <Button
                onClick={() => navigate(`/laptops/${laptop.id}`)}
                className="laptop-details-btn"
              >
                View Details →
              </Button>
            </div>
          ))
        ) : (
          <div className="no-laptops">No laptops found. Try a different search term.</div>
        )}
      </div>
    </div>
  );
};

export default LaptopList;