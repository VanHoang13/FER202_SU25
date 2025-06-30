import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  items: [],
  filter: "",
  sortBy: "name",
};

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.value,
      };
    case "SET_SORT":
      return {
        ...state,
        sortBy: action.value,
      };
    default:
      return state;
  }
}

function getProcessedItems(items, filter, sortBy) {
  let filtered = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (sortBy === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "createdAt") {
    filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  return filtered;
}

function ItemManager() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      const newItem = {
        id: Date.now(),
        name: input.trim(),
        createdAt: new Date(),
      };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setInput("");
    }
  };

  const handleSaveEdit = (id) => {
    if (editText.trim()) {
      dispatch({ type: "EDIT_ITEM", id, name: editText.trim() });
      setEditId(null);
      setEditText("");
    }
  };

  const visibleItems = getProcessedItems(state.items, state.filter, state.sortBy);

  return (
    <div className="container mt-4">
      <h5>Enter Item:</h5>
      <input
        className="form-control mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item name"
      />
      <button className="btn btn-primary mb-3" onClick={handleAdd}>
        Add Item
      </button>

      <select
        className="form-select mb-3"
        value={state.sortBy}
        onChange={(e) => dispatch({ type: "SET_SORT", value: e.target.value })}
      >
        <option value="name">Sort by Name</option>
        <option value="createdAt">Sort by Created Time</option>
      </select>

      <input
        className="form-control mb-3"
        placeholder="Search items..."
        value={state.filter}
        onChange={(e) => dispatch({ type: "SET_FILTER", value: e.target.value })}
      />

      {visibleItems.map((item) => (
        <div
          key={item.id}
          className="border rounded p-3 mb-2 bg-light d-flex justify-content-between align-items-center"
        >
          {editId === item.id ? (
            <>
              <input
                className="form-control me-2"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <div>
                <button className="btn btn-success me-2" onClick={() => handleSaveEdit(item.id)}>
                  Save
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setEditId(null);
                    setEditText("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <span>{item.name}</span>
              <div>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => {
                    setEditId(item.id);
                    setEditText(item.name);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                >
                  Remove
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemManager;
