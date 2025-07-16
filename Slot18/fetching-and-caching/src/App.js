// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy loaded components
const Login = lazy(() => import("./components/Login"));
const PostList = lazy(() => import("./components/PostList"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const DeletePost = lazy(() => import("./components/DeletePost"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-5">Đang tải...</div>}>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/posts" element={<PostList titleHeading="Danh sách bài viết" />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/delete/:id" element={<DeletePost />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;