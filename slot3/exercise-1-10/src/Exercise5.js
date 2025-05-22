import React from "react";

function EmployeeDropdown() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <select>
      {employees.map((employee, index) => (
        <option key={employee.id ? employee.id : index} value={employee.name}>
          {employee.name}
        </option>
      ))}
    </select>
  );
}

export default EmployeeDropdown;
