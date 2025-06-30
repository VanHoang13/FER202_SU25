import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="text-center mt-5">
      <Button variant="outline-dark" onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'}
      </Button>
      {isVisible && <p className="mt-3">Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;
