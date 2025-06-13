import React, { useState } from 'react';

function TextInput() {
  const [name, setName] = useState('Hoàng');
  const [age, setAge] = useState(21);

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => { setName(e.target.value); console.log(e.target.value); }} 
      />
      <p>Tên của tôi là {name}</p>

      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value, 10))} 
      />
      <p>Tuổi của tôi là {age}</p>
    </div>
  );
}

export default TextInput;