import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <Container>
        <p>© 2025 Laptop Management App. All rights reserved.</p>
        <p>Contact: support@laptopstore.com | Phone: (123) 456-7890</p>
      </Container>
    </footer>
  );
};

export default Footer;