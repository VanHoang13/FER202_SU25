import React from "react";

function SortedEmployeeList() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Sao chép mảng để không thay đổi gốc, rồi sắp xếp
  const sortedEmployees = [...employees].sort((a, b) => {
    // So sánh department trước
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;
    // Nếu department giống nhau, so sánh name
    return a.name.localeCompare(b.name);
  });

  return (
    <ul>
      {sortedEmployees.map((emp, index) => (
        <li key={emp.id ? emp.id : index}>
          {emp.name} - {emp.department}
        </li>
      ))}
    </ul>
  );
}

export default SortedEmployeeList;
