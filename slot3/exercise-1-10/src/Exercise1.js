import React from "react";

function Employee() {
  const employee = { name: "John Doe", age: 30, department: "IT" };
  const { name, age, department } = employee;

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Employee />
    </div>
  );
}

export default App;
