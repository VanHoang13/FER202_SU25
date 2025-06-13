import React, { useState } from 'react';

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Dragon Fruit', 'Elderberry'];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Tìm kiếm..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;