import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const AdvancedForm = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Xác thực tên
    if (!formData.name) {
      newErrors.name = 'Tên không được để trống!';
    } else if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = 'Tên phải chứa từ 3 đến 50 ký tự!';
    }

    // Xác thực tuổi
    const age = parseInt(formData.age, 10);
    if (!formData.age) {
      newErrors.age = 'Tuổi không được để trống!';
    } else if (isNaN(age) || age < 18 || age > 100) {
      newErrors.age = 'Tuổi phải là số từ 18 đến 100!';
    }

    // Xác thực email
    if (!formData.email) {
      newErrors.email = 'Email không được để trống!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không đúng định dạng!';
    }

    // Xác thực số điện thoại
    if (!formData.phone) {
      newErrors.phone = 'Số điện thoại không được để trống!';
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại phải chứa 10-15 chữ số!';
    }

    // Xác thực điều khoản
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Bạn phải đồng ý với điều khoản!';
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setShowAlert(false);
    }
  };

  return (
    <Container className="mt-4">
      <h3>{title}</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra thông tin.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAgreeTerms" className="mb-3">
          <Form.Check
            type="checkbox"
            name="agreeTerms"
            label="Tôi đồng ý với các điều khoản"
            checked={formData.agreeTerms}
            onChange={handleChange}
            isInvalid={!!errors.agreeTerms}
          />
          <Form.Control.Feedback type="invalid" style={{ display: errors.agreeTerms ? 'block' : 'none' }}>
            {errors.agreeTerms}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

AdvancedForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AdvancedForm;