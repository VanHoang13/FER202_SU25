import React, { useState } from 'react';

function ColorSwitcher() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const colors = ['red', 'blue', 'green', 'yellow'];

  return (
    <div>
      <select
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      >
        {colors.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: backgroundColor,
          marginTop: '10px'
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;