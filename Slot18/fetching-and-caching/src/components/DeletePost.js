import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmed = window.confirm("Bạn chắc chắn muốn xóa bài viết?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      navigate("/posts");
    } catch (error) {
      alert("Lỗi khi xóa bài viết.");
      console.error(error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Xác nhận xóa bài viết</h2>
      <p>Bạn có chắc chắn muốn xóa bài viết này?</p>
      <Button variant="danger" onClick={handleDelete} className="me-2">Xóa</Button>
      <Button variant="secondary" onClick={() => navigate("/posts")}>Hủy</Button>
    </Container>
  );
};

export default DeletePost;