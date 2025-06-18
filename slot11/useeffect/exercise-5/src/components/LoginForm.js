import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  useEffect(() => {
    if (touched.email) {
      const isValid = validateEmail(email);
      setIsEmailValid(isValid);
      setEmailError(isValid ? "" : "Vui lòng nhập email hợp lệ");
    }
  }, [email, touched.email]);

  useEffect(() => {
    if (touched.password) {
      const isValid = validatePassword(password);
      setIsPasswordValid(isValid);
      setPasswordError(isValid ? "" : "Mật khẩu phải có ít nhất 8 ký tự");
    }
  }, [password, touched.password]);

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Đăng nhập thành công!");
      setEmail("");
      setPassword("");
      setTouched({ email: false, password: false });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Đăng nhập</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched({ ...touched, email: true })}
            isValid={touched.email && isEmailValid}
            isInvalid={touched.email && !isEmailValid}
            placeholder="Nhập email của bạn"
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched({ ...touched, password: true })}
            isValid={touched.password && isPasswordValid}
            isInvalid={touched.password && !isPasswordValid}
            placeholder="Nhập mật khẩu"
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;