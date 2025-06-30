import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function ColorSwitcher() {
  const [color, setColor] = useState('white');
  const handleColorChange = (e) => {
    setColor(e.target.value); 
  };

  return (
    <div className="text-center mt-5">
      <Form.Group controlId="colorSelect">
        <Form.Control  as="select"  onChange={handleColorChange} value={color} style={{ width: '200px', margin: '0 auto' }} >
          <option value="white">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </Form.Control>
      </Form.Group>

      <div style={{ width: '100px', height: '100px', backgroundColor: color, margin: '20px auto', }}/></div>
  );
}

export default ColorSwitcher;
