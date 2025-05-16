function PeopleList() {
  const people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 }
  ];

  return (
    <div>
      <h2>List of People</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            Name: {person.name}, Age: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
