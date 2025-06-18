    import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateInput = (value) => {
  return value.length >= 5;
};

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      const isValidInput = validateInput(value);
      setIsValid(isValidInput);
      setErrorMessage(isValidInput ? "" : "Giá trị phải có ít nhất 5 ký tự!");
    }
  }, [value, touched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert("Dữ liệu đã được gửi thành công!");
      setValue("");
      setTouched(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Xác thực trường nhập liệu</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="validatedInput" className="mb-3">
          <Form.Label>Nhập một giá trị</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => setTouched(true)}
            isValid={touched && isValid}
            isInvalid={touched && !isValid}
            placeholder="Nhập ít nhất 5 ký tự"
          />
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isValid}>
          Gửi
        </Button>
      </Form>
    </div>
  );
}

export default ValidatedInput;