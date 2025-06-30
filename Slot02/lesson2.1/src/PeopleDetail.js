function PeopleDetails() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" }
  ];

  return (
    <div>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            My name is {person.name},  
            I'm {person.age} years old, 
            my occupation is {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleDetails;
