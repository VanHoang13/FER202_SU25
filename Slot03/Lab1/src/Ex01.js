
function EmployeeDetails() {
  const employee = { name: "John Doe", age: 30, department: "IT" };

  const { name, age, department } = employee;

  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </>
  );
}

export default EmployeeDetails;
