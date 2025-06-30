import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'wheat', padding: '10px', textAlign: 'center', position: 'fixed', width: '100%', bottom: '0' }}>
      <p>© 2023 Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;