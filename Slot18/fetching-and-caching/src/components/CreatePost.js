import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, content } = formData;

    if (!title || !content) {
      setStatus("Vui lòng điền đầy đủ tiêu đề và nội dung.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/posts", formData);
      navigate("/posts");
    } catch (error) {
      setStatus("Lỗi khi tạo bài viết.");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Tạo bài viết mới</h2>
      {status && <Alert variant="warning">{status}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            rows={5}
            value={formData.content}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Tạo bài viết</Button>
      </Form>
    </Container>
  );
};

CreatePost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CreatePost;