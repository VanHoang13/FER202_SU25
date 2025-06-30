import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function ValidatedLoginForm() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (pw) => {
    return pw.length >= 8;
  };

  useEffect(() => {
    setEmailValid(!emailTouched || validateEmail(email));
  }, [email, emailTouched]);

  useEffect(() => {
    setPasswordValid(!passwordTouched || validatePassword(password));
  }, [password, passwordTouched]);

  useEffect(() => {
    setFormValid(validateEmail(email) && validatePassword(password));
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "auto", marginTop: "40px" }}
    >
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)} isInvalid={!emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ. Vui lòng nhập lại!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)} isInvalid={!passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự!
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary" disabled={!formValid}>
        Submit
      </Button>
    </Form>
  );
}

export default ValidatedLoginForm;
