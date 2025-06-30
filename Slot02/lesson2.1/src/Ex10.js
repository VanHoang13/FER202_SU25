function calAverageAgeOfEachOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Teacher" },
    { name: "Bob", age: 30, occupation: "Artists" },
    { name: "Adam", age: 35, occupation: "Teacher" },
    { name: "Charlie", age: 28, occupation: "Engineer" },
    { name: "David", age: 22, occupation: "Artists" },
    { name: "Eve", age: 35, occupation: "Teacher" },
  ];
   const occupationData = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = { totalAge: 0, count: 0 };
    }
    acc[person.occupation].totalAge += person.age;
    acc[person.occupation].count += 1;
    return acc;
  }, {});

  const averageAgeByOccupation = Object.entries(occupationData).map(
    ([occupation, data]) => ({
      occupation,
      averageAge: (data.totalAge / data.count).toFixed(2), 
    })
  );
  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {averageAgeByOccupation.map(({ occupation, averageAge }, index) => (
          <li key={index}>
            <strong>{occupation}</strong>: {averageAge} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default calAverageAgeOfEachOccupation;
