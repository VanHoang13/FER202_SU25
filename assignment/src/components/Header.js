import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ branchName, username, onLogout, cartCount }) => {
  return (
    <header className="header">
      <Link to="/" className="branch-logo">
        {branchName}
      </Link>
      <div className="user-section">
        <span>Xin chào, {username}</span>
        <Link to="/cart" className="cart-link">
          Giỏ hàng ({cartCount})
        </Link>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;