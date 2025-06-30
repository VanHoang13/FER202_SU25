import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'orange', padding: '10px', textAlign: 'center' }}>
      <div style={{ backgroundColor: 'white', display: 'inline-block', padding: '10px' }}>
        <img src="/images/fptu.png" alt="FPT Education Logo" style={{ width: '200px', height: '100px' }} />
      </div>
      <nav>
        <a href="#home" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;