import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const laptops = [
    { id: 1, name: 'Dell XPS 13', description: 'High-performance ultrabook', image: '/images/dell-xps13.jpg' },
    { id: 2, name: 'MacBook Pro', description: 'Powerful laptop', image: '/images/macbook-pro.jpg' },
    { id: 3, name: 'HP Spectre x360', description: 'Versatile 2-in-1', image: '/images/hp-spectre.jpg' },
    { id: 4, name: 'Lenovo ThinkPad X1', description: 'Business-class laptop', image: '/images/lenovo-thinkpad.jpg' },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % laptops.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, laptops.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % laptops.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + laptops.length) % laptops.length);
  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  return (
    <div style={{ marginBottom: '40px', position: 'relative' }}>
      <div
        style={{
          position: 'relative',
          height: '300px',
          overflow: 'hidden',
          border: '1px solid #e0e0e0',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          style={{
            display: 'flex',
            width: `${laptops.length * 100}%`,
            height: '100%',
            transform: `translateX(-${currentSlide * (100 / laptops.length)}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {laptops.map((laptop) => (
            <div
              key={laptop.id}
              style={{
                flex: `0 0 ${100 / laptops.length}%`,
                height: '100%',
                backgroundImage: `url(${process.env.PUBLIC_URL + laptop.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#333',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div>
                <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>{laptop.name}</h3>
                <p style={{ fontSize: '1rem' }}>{laptop.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <ChevronRight size={20} />
        </button>

        <button
          onClick={toggleAutoPlay}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '5px' }}>
        {laptops.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              background: idx === currentSlide ? '#3498db' : '#ddd',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;