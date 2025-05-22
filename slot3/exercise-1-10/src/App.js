import React from "react";
import "./App.css";

import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./Exercise6";
import Exercise7 from "./Exercise7";
import Exercise8 from "./Exercise8";
import Exercise9 from "./Exercise9";
import Exercise10 from "./Exercise10";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h2>Exercise 1 – Destructuring</h2>
      <Exercise1 />

      <h2>Exercise 2 – List with map()</h2>
      <Exercise2 />

      <h2>Exercise 3 – Table of Employees</h2>
      <Exercise3 />

      <h2>Exercise 4 – Average Age with Rest</h2>
      <Exercise4 />

      <h2>Exercise 5 – Dropdown of Names</h2>
      <Exercise5 />

      <h2>Exercise 6 – Filter IT Department</h2>
      <Exercise6 />

      <h2>Exercise 7 – Sort by Department & Name</h2>
      <Exercise7 />

      <h2>Exercise 8 – Group by Department</h2>
      <Exercise8 />

      <h2>Exercise 9 – Any Teenagers?</h2>
      <Exercise9 />

      <h2>Exercise 10 – Search by Name</h2>
      <Exercise10 />
    </div>
  );
}

export default App;
