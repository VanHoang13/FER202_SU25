// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';
import QuizResult from './components/QuizResult';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Quizzes</NavLink>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/news">News</NavLink>
              <NavLink className="nav-link" to="/quiz">Quiz</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/review" element={<QuizReview />} />
            <Route path="/quiz/result" element={<QuizResult />} />
            <Route path="/" element={<h1>Welcome to Quizzes</h1>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;