import React, { useState } from 'react';

function DragAndDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const updatedItems = [...items];
    const draggedItem = updatedItems[draggingItem];
    updatedItems.splice(draggingItem, 1); 
    updatedItems.splice(index, 0, draggedItem); 
    setItems(updatedItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        width: '300px',
        margin: '0 auto',
        border: '1px solid #ccc', 
      }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              padding: '10px', 
              margin: '5px 0', 
              backgroundColor: draggingItem === index ? '#d3d3d3' : '#f4f4f4',
              cursor: 'move', 
              border: '1px solid #ccc',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropList;
