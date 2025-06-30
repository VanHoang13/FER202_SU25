function EmployeeList() {
    const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];
  return (
    <ul>
        <p>List of Employees</p>
      {employees.map((employee, index) => (
        <li key={index}>
          {employee.name} - {employee.department}
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
