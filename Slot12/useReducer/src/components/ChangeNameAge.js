import React, { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", value: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: "SET_AGE", value: e.target.value });
  };

  return (
    <div className="mt-4">
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          value={state.name}
          onChange={handleNameChange}
          placeholder="Input name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age:</label>
        <input
          type="text"
          className="form-control"
          value={state.age}
          onChange={handleAgeChange}
          placeholder="Input age"
        />
      </div>
      <div>
        <h3>Name: {state.name}</h3>
        <h3>Age: {state.age}</h3>
      </div>
    </div>
  );
}

export default ChangeNameAge;
