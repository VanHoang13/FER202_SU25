import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import CarouselComponent from './components/Carousel';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import AdminDashboard from './components/AdminDashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap CSS

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Không thể lấy dữ liệu từ API');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
    if (user === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    navigate('/login');
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: (products.length + 1).toString() }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      {isLoggedIn && <Header branchName="Tech Store" username={username} onLogout={handleLogout} cartCount={cart.length} />}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/"
          element={
            isLoggedIn && username !== 'admin' ? (
              <>
                <CarouselComponent />
                <ProductList products={products} addToCart={addToCart} />
              </>
            ) : (
              <Navigate to={username === 'admin' ? '/admin' : '/login'} />
            )
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} addToCart={addToCart} updateProduct={updateProduct} />}
        />
        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            isLoggedIn && username === 'admin' ? (
              <AdminDashboard
                products={products}
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
                addProduct={addProduct}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      {isLoggedIn && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;