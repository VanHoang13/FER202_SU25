function PeopleTable() {
  const people = [
    { name: "Jack", age: 50, occupation: "Manager" },
    { name: "Michael", age: 9, occupation: "Student" },
    { name: "John", age: 40, occupation: "Developer" },
    { name: "Ann", age: 19, occupation: "Designer" },
    { name: "Elisabeth", age: 16, occupation: "Intern" }
  ];

  return (
    <div>
      <h2>People Table</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
