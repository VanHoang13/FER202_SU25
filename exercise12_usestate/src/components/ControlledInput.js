import React, { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text nhập vào: {text}</p>
    </div>
  );
}

export default ControlledInput;