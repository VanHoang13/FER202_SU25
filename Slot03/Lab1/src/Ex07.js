function EmployeeList() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
    { name: "Elizabeth", department: "IT", age: 21 },
  ];

  const sortEmployees = employees.slice().sort((a, b) => {
    if (a.department > b.department) return 1;
    if (a.department < b.department) return -1;
    return a.age - b.age;
  });

  return (
    <div>
      <ul>
        <p>Sort employees by department, then by name</p>
        {sortEmployees.map((emp, index) => (
          <li key={index}>
            Name: {emp.name} - Department: {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
