import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango'];

  const handleSearchChange = (e) => {
    setQuery(e.target.value); 
  };
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="text-center mt-5">
      <input
        type="text" value={query} onChange={handleSearchChange} placeholder="Search for a fruit..."
        className="form-control mb-3" style={{ width: '300px', margin: '0 auto' }}
      />
      <ul className="list-group" style={{ width: '300px', margin: '0 auto' }}>
        {filteredItems.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
