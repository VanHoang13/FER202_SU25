import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ẩn' : 'Hiện'}
      </button>
      {isVisible && <p>Đây là văn bản ẩn/hiện!</p>}
    </div>
  );
}

export default ToggleVisibility;