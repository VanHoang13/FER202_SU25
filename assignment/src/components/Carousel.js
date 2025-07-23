import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Carousel.css';

const CarouselComponent = () => {
  const images = [
    { src: '/images/banner1.jpg', alt: 'Laptop 1' },
    { src: '/images/banner2.jpg', alt: 'Laptop 2' },
    { src: '/images/banner3.jpg', alt: 'Laptop 3' },
    { src: '/images/banner4.jpg', alt: 'Laptop 4' },
    { src: '/images/banner5.jpg', alt: 'Laptop 5' },
  ];

  return (
    <Carousel id="carouselExample" className="carousel slide" interval={3000} controls indicators>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;