import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/laptops" element={<LaptopList />} />
          <Route path="/laptops/:id" element={<LaptopDetail />} />
          <Route path="/" element={<Navigate to="/laptops" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;