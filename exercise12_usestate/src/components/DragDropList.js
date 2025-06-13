import React, { useState } from 'react';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (draggingItem === null) return;
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggingItem, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              padding: '10px',
              margin: '5px',
              backgroundColor: draggingItem === index ? '#e0e0e0' : 'white',
              cursor: 'move'
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;