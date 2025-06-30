import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreatedForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    terms: false
  });

  const [isValid, setIsValid] = useState({
    name: false,
    gender: false,
    country: false,
    terms: false
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setIsValid({
      name: name.trim().length >= 3,
      gender: gender !== "",
      country: country !== "",
      terms: termsAccepted
    });
  }, [name, gender, country, termsAccepted]);

  useEffect(() => {
    setFormValid(
      isValid.name && isValid.gender && isValid.country && isValid.terms
    );
  }, [isValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form onSubmit={handleSubmit}  style={{ maxWidth: "500px", margin: "40px auto" }} >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched({ ...touched, name: true })} isInvalid={touched.name && !isValid.name} />
        <Form.Control.Feedback type="invalid"> Name must be at least 3 characters long.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <div onBlur={() => setTouched({ ...touched, gender: true })}>
          <Form.Check inline label="Male" name="gender" type="radio" value="male"
            checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
          <Form.Check inline label="Female" name="gender" type="radio" value="female" 
            checked={gender === "female"}  onChange={(e) => setGender(e.target.value)} />
          <Form.Check inline label="Other" name="gender" type="radio" value="other" 
            checked={gender === "other"} onChange={(e) => setGender(e.target.value)} />
        </div>
        {!isValid.gender && touched.gender && (
          <div className="text-danger mt-1">Please select a gender.</div> )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Select value={country}
          onChange={(e) => setCountry(e.target.value)} onBlur={() => setTouched({ ...touched, country: true })}
          isInvalid={touched.country && !isValid.country} isValid={touched.country && isValid.country} >
          <option value="">Select country</option>
          <option value="danang">Đà Nẵng</option>
          <option value="hanoi">Hà Nội</option>
          <option value="hcm">Hồ Chí Minh</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid"> Please select a country. </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTerms">
        <Form.Check type="checkbox" label="I agree to the terms and conditions"
          checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)}
          onBlur={() => setTouched({ ...touched, terms: true })} isInvalid={touched.terms && !isValid.terms}  />
        {!isValid.terms && touched.terms && (
          <div className="text-danger">You must agree before submitting.</div> )}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!formValid}> Submit </Button>
    </Form>
  );
}

export default CreatedForm;
