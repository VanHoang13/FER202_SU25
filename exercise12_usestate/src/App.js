import React from 'react';
import DragDropList from './components/DragDropList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <h1>Drag and Drop List</h1>
      <DragDropList />
    </div>
  );
}

export default App;