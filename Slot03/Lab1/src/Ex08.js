function EmployeeList() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
    { name: "Elizabeth", department: "IT", age: 21 },
  ];

    const groupedEmp = employees.reduce((arr, emp) => {
    if (!arr[emp.department]) 
        arr[emp.department] = [];
    arr[emp.department].push(emp);
    return arr;
  }, {});  // {} == initial value, khi chưa có job nó rỗng

  return (
    <div>
      <h2>Employee Grouped by Department</h2>
      <ul> 
         {/* Object.keys(groupedPeople) = ["Teacher", "Artist", "Engineer"] */}
        {Object.keys(groupedEmp).map((department, index) => (
          <li key={index}>
            <h3>{department}</h3>
            <ul>
              {groupedEmp[department].map((emp, idx) => (
                <li key={idx}>
                  {emp.name} - {emp.age} years old
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
