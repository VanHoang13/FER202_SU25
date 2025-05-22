import React from "react";

function ITEmployees() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Lọc nhân viên thuộc phòng IT
  const itEmployees = employees.filter(emp => emp.department === "IT");

  return (
    <ul>
      {itEmployees.map(emp => (
        <li key={emp.id ? emp.id : emp.name}>
          {emp.name} - {emp.department}
        </li>
      ))}
    </ul>
  );
}

export default ITEmployees;
