function EmployeeList() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  const ages = employees.map((employee) => employee.age);

  const avgAge = (...ages) => {
    if (ages.length === 0) return 0;
    const totalAge = ages.reduce((sum, age) => sum + age);
    return totalAge / ages.length;
  };

  return (
    <div>
      <p>The average age of employee list: {avgAge(...ages)}</p>
    </div>
  );
}

export default EmployeeList;
