import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const validateInput = (value) => {
  return value.length >= 5; 
};

function ValidatedInput() {
  const [value, setValue] = useState(""); 
  const [isValid, setIsValid] = useState(true); 
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const isValidInput = validateInput(value);
    setIsValid(isValidInput);

    if (!isValidInput) {
      setErrorMessage("Giá trị phải có ít nhất 5 ký tự!");
    } else {
      setErrorMessage("");
    }
  }, [value]);

  return (
    <Form style={{ maxWidth: "400px", margin: "auto", marginTop: "40px" }}>
      <Form.Group controlId="validatedInput">
        <Form.Label>Nhập một giá trị</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isValid={isValid}
          isInvalid={!isValid}
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isValid} className="mt-3">
        Gửi
      </Button>
    </Form>
  );
}

export default ValidatedInput;
