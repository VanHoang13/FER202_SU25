import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Please provide a valid first name.';
    if (!formData.lastName) newErrors.lastName = 'Please provide a valid last name.';
    if (!formData.username) newErrors.username = 'Please choose a username.';
    if (!formData.city) newErrors.city = 'Please provide a valid city.';
    if (!formData.state) newErrors.state = 'Please provide a valid state.';
    if (!formData.zip) newErrors.zip = 'Please provide a valid zip.';
    if (!formData.terms) newErrors.terms = 'You must agree to terms and conditions.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // Ẩn thông báo sau 3 giây
    }
  };

  return (
    <div className="container mt-4">
      <h2 style={{ textAlign: 'left' }}>Contact Form</h2>
      {showSuccess && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Form submitted successfully!
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowSuccess(false)}
            aria-label="Close"
          ></button>
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <Form.Group className="mb-3 col-md-4">
            <Form.Label style={{ textAlign: 'left', display: 'block' }}>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">{errors.firstName || 'Looks good!'}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 col-md-4">
            <Form.Label style={{ textAlign: 'left', display: 'block' }}>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">{errors.lastName || 'Looks good!'}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 col-md-4">
            <Form.Label style={{ textAlign: 'left', display: 'block' }}>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">{errors.username || 'Looks good!'}</Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col-md-4">
            <Form.Label style={{ textAlign: 'left', display: 'block' }}>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
            />
            <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 col-md-4">
            <Form.Label style={{ textAlign: 'left', display: 'block' }}>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              isInvalid={!!errors.state}
            />
            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 col-md-4">
            <Form.Label style={{ textAlign: 'left', display: 'block' }}>Zip</Form.Label>
            <Form.Control
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              isInvalid={!!errors.zip}
            />
            <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="terms"
            label="You must agree to terms and conditions"
            checked={formData.terms}
            onChange={handleChange}
            isInvalid={!!errors.terms}
            style={{ textAlign: 'left' }}
          />
          <Form.Control.Feedback type="invalid">{errors.terms}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default Contact;