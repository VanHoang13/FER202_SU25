import React, { useState } from "react";

function EmployeeSearch() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Lọc danh sách nhân viên theo tên (không phân biệt hoa thường)
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search employee by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map(emp => (
            <li key={emp.id}>{emp.name} - {emp.department}</li>
          ))
        ) : (
          <li>No matching employees found</li>
        )}
      </ul>
    </div>
  );
}

export default EmployeeSearch;
