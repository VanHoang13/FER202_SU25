import React from "react";

function EmployeeTable() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <table border="1" cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={employee.id ? employee.id : index}>
            <td>{employee.id ? employee.id : index + 1}</td>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
