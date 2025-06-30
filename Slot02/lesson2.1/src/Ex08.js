function sortByOccupationAndThenByAge() {
  const people = [
    { name: "Alice", age: 25, occupation: "CEO" },
    { name: "Bob", age: 30, occupation: "Artists" },
    { name: "Adam", age: 35, occupation: "Teacher" },
    { name: "Charlie", age: 28, occupation: "Engineer" },
    { name: "David", age: 22, occupation: "Designer" },
    { name: "Eve", age: 35, occupation: "Teacher" },
  ];

  const peopleSorted = people.slice().sort((a, b) => {
    if (a.occupation > b.occupation) return 1;
    if (a.occupation < b.occupation) return -1;
    return a.age - b.age; }
  );
  
  return (
    <div>
      <h2>Sorted People by Occupation and Age</h2>
      <ul>
        {peopleSorted.map((person, index) => (
          <li key={index}>
            {person.name} - {person.occupation} - {person.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default sortByOccupationAndThenByAge;
