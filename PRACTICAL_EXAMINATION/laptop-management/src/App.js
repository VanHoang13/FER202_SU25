import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Login from './components/Login';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Carousel from './components/Carousel';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  const handleLogoutHover = (e, isHover) => {
    if (isHover) {
      e.target.style.backgroundColor = '#e74c3c';
      e.target.style.color = '#fff';
    } else {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.color = '#e74c3c';
    }
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f7fa' }}>
        {user ? (
          <>
            <Container style={{ flex: '1 0 auto', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', padding: '15px', background: 'linear-gradient(90deg, #2c3e50, #3498db)', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <h2 style={{ fontSize: '2rem', color: '#fff', fontWeight: 700, textShadow: '1px 1px 3px rgba(0,0,0,0.2)', cursor: 'pointer' }}>Laptop Store</h2>
                </Link>
                <Button
                  variant="outline-danger"
                  onClick={handleLogout}
                  style={{ padding: '8px 20px', borderColor: '#e74c3c', color: '#e74c3c', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => handleLogoutHover(e, true)}
                  onMouseLeave={(e) => handleLogoutHover(e, false)}
                >
                  Logout
                </Button>
              </div>
              <Routes>
                <Route
                  path="/laptops"
                  element={
                    <>
                      <Carousel />
                      <LaptopList user={user} />
                    </>
                  }
                />
                <Route path="/laptops/:id" element={<LaptopDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/" element={<Navigate to="/laptops" />} />
                <Route path="*" element={<div className="text-center mt-5">404 Not Found</div>} />
              </Routes>
            </Container>
            <footer style={{ background: 'linear-gradient(90deg, #2c3e50, #34495e)', color: '#ecf0f1', padding: '20px 0', textAlign: 'center' }}>
              <p>© 2025 Laptop Store. All rights reserved.</p>
            </footer>
          </>
        ) : (
          <Container style={{ flex: '1 0 auto', padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Login setUser={setUser} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Container>
        )}
      </div>
    </Router>
  );
}

export default App;