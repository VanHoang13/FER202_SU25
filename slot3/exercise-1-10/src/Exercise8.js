import React from "react";

function GroupedEmployees() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Nhóm nhân viên theo department
  const grouped = employees.reduce((acc, emp) => {
    const dept = emp.department;
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(emp);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(grouped).map(([department, emps]) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {emps.map((emp, index) => (
              <li key={emp.id ? emp.id : index}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedEmployees;
