function EmployeeList() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
    { name: "Elizabeth", department: "IT", age: 21 },
  ];

  const isTeenager = employees.some(emp => emp.age >= 13 && emp.age <= 20);

  return  (
    <div>
        <h3>Check if any employee is a teenager</h3>
        {isTeenager ? (
            <p>Is any teenagers: True</p>
        ) : (
            <p>Is any teenagers: False</p>
        )}
     </div>);
}

export default EmployeeList;
