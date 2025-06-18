import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);
  const [isCountryValid, setIsCountryValid] = useState(true);
  const [isAgreeTermsValid, setIsAgreeTermsValid] = useState(true);

  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [agreeTermsError, setAgreeTermsError] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    agreeTerms: false,
  });

  const validateName = (value) => value.trim().length >= 3;
  const validateGender = (value) => value !== "";
  const validateCountry = (value) => value !== "";
  const validateAgreeTerms = (value) => value === true;

  useEffect(() => {
    if (touched.name) {
      const isValid = validateName(name);
      setIsNameValid(isValid);
      setNameError(isValid ? "" : "Tên phải có ít nhất 3 ký tự");
    }
  }, [name, touched.name]);

  useEffect(() => {
    if (touched.gender) {
      const isValid = validateGender(gender);
      setIsGenderValid(isValid);
      setGenderError(isValid ? "" : "Vui lòng chọn giới tính");
    }
  }, [gender, touched.gender]);

  useEffect(() => {
    if (touched.country) {
      const isValid = validateCountry(country);
      setIsCountryValid(isValid);
      setCountryError(isValid ? "" : "Vui lòng chọn quốc gia");
    }
  }, [country, touched.country]);

  useEffect(() => {
    if (touched.agreeTerms) {
      const isValid = validateAgreeTerms(agreeTerms);
      setIsAgreeTermsValid(isValid);
      setAgreeTermsError(isValid ? "" : "Bạn phải đồng ý với điều khoản");
    }
  }, [agreeTerms, touched.agreeTerms]);

  const isFormValid = isNameValid && isGenderValid && isCountryValid && isAgreeTermsValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Biểu mẫu đã được gửi thành công!");
      setName("");
      setGender("");
      setCountry("");
      setAgreeTerms(false);
      setTouched({ name: false, gender: false, country: false, agreeTerms: false });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Biểu mẫu xác thực</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched({ ...touched, name: true })}
            isValid={touched.name && isNameValid}
            isInvalid={touched.name && !isNameValid}
            placeholder="Nhập tên của bạn"
          />
          <Form.Control.Feedback type="invalid">
            {nameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGender" className="mb-3">
          <Form.Label>Giới tính</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Nam"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              onBlur={() => setTouched({ ...touched, gender: true })}
              isInvalid={touched.gender && !isGenderValid}
            />
            <Form.Check
              inline
              type="radio"
              label="Nữ"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              onBlur={() => setTouched({ ...touched, gender: true })}
              isInvalid={touched.gender && !isGenderValid}
            />
          </div>
          {touched.gender && !isGenderValid && (
            <div className="text-danger">{genderError}</div>
          )}
        </Form.Group>

        <Form.Group controlId="formCountry" className="mb-3">
          <Form.Label>Quốc gia</Form.Label>
          <Form.Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onBlur={() => setTouched({ ...touched, country: true })}
            isValid={touched.country && isCountryValid}
            isInvalid={touched.country && !isCountryValid}
          >
            <option value="">Chọn quốc gia</option>
            <option value="vn">Việt Nam</option>
            <option value="us">Hoa Kỳ</option>
            <option value="jp">Nhật Bản</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {countryError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAgreeTerms" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Tôi đồng ý với các điều khoản và điều kiện"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            onBlur={() => setTouched({ ...touched, agreeTerms: true })}
            isInvalid={touched.agreeTerms && !isAgreeTermsValid}
          />
          <Form.Control.Feedback type="invalid">
            {agreeTermsError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Gửi
        </Button>
      </Form>
    </div>
  );
};

export default FormValidation;