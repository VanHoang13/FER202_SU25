import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Table,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostList = ({ titleHeading }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts");
        setPosts(res.data);
      } catch (err) {
        setStatus("Lỗi khi lấy danh sách bài viết.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa bài viết này?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
      setStatus("Xóa bài viết thành công.");
    } catch (error) {
      setStatus("Lỗi khi xóa bài viết.");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" />
        <div>Đang tải dữ liệu...</div>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2>{titleHeading}</h2>
      {status && <Alert variant="info">{status}</Alert>}
      <div className="text-end mb-3">
        <Button as={Link} to="/create" variant="success">
          + Tạo bài viết mới
        </Button>
      </div>
      {posts.length === 0 ? (
        <Alert variant="warning">Không có bài viết nào.</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Tiêu đề</th>
              <th>Nội dung</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, idx) => (
              <tr key={post.id}>
                <td>{idx + 1}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    as={Link}
                    to={`/edit/${post.id}`}
                    className="me-2"
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(post.id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};
// ✅ PropTypes được dùng để validate prop nếu truyền vào
PostList.propTypes = {
  titleHeading: PropTypes.string.isRequired,
};

// ✅ Nếu không truyền, dùng giá trị mặc định
PostList.defaultProps = {
  titleHeading: "Danh sách bài viết",
};

export default PostList;