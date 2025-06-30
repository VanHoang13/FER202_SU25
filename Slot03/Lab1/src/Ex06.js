function EmployeeList() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
    { name: "Elizabeth", department: "IT", age: 21 },
  ];

   const itEmployees = employees.filter(employee => employee.department === "IT");

  return (
    <ul>
        <p>IT Department</p>
      {itEmployees.map(employee => (
        <li key={employee.id}>{employee.name} - {employee.department}</li>
      ))}
    </ul>
  );
}

export default EmployeeList;
