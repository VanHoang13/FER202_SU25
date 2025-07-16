import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const EditPost = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        setFormData({ title: res.data.title, content: res.data.content });
      } catch (error) {
        setStatus("Không thể lấy dữ liệu bài viết.");
      }
    };

    fetchPost();
  }, [id]);

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
      await axios.put(`http://localhost:3000/posts/${id}`, formData);
      navigate("/posts");
    } catch (error) {
      setStatus("Lỗi khi cập nhật bài viết.");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Chỉnh sửa bài viết</h2>
      {status && <Alert variant="danger">{status}</Alert>}
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
        <Button variant="primary" type="submit" className="mt-3">Cập nhật</Button>
      </Form>
    </Container>
  );
};

EditPost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default EditPost;