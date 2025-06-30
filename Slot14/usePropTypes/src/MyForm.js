import React, { useState, useReducer } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  name: "",
  age: "",
  email: "",
  phone: "",
  terms: false,
  isSubmitted: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

const MyForm = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value: type === "checkbox" ? checked : value });
  };

  // Validation logic
  const handleValidation = () => {
    const newErrors = {};
    // Name: 3-50 characters, not empty
    if (!state.name || state.name.length < 3 || state.name.length > 50) {
      newErrors.name = "Tên phải từ 3-50 kí tự!";
    }
    // Age: 18-100, not empty
    if (!state.age || isNaN(state.age) || state.age < 18 || state.age > 100) {
      newErrors.age = "Tuổi phải từ 18-100!";
    }
    // Email: not empty, valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email || !emailRegex.test(state.email)) {
      newErrors.email = "Email không hợp lệ!";
    }
    // Phone: 10-15 digits, not empty
    const phoneRegex = /^\d{10,15}$/;
    if (!state.phone || !phoneRegex.test(state.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10-15 chữ số!";
    }
    // Terms: must be checked
    if (!state.terms) {
      newErrors.terms = "Phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container>
      <h3>{title}</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng sửa các lỗi trên.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={state.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formTerms">
          <Form.Check
            type="checkbox"
            name="terms"
            label="Đồng ý với điều khoản"
            checked={state.terms}
            onChange={handleChange}
            isInvalid={!!errors.terms}
          />
          <Form.Control.Feedback type="invalid">{errors.terms}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

MyForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm;
