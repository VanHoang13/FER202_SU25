// function peopleGroupByJob() {
//   const people = [
//     { name: "Alice", age: 25, occupation: "Teacher" },
//     { name: "Bob", age: 30, occupation: "Artists" },
//     { name: "Adam", age: 35, occupation: "Teacher" },
//     { name: "Charlie", age: 28, occupation: "Engineer" },
//     { name: "David", age: 22, occupation: "Artists" },
//     { name: "Eve", age: 35, occupation: "Teacher" },
//   ];

//   const groupedPeople = people.reduce((arr, person) => {
//     if (!arr[person.occupation]) 
//         arr[person.occupation] = [];
//     arr[person.occupation].push(person);
//     return arr;
//   }, {});  // {} == initial value, khi chưa có job nó rỗng

//   return (
//     <div>
//       <h2>People Grouped by Occupation</h2>
//       <ul> 
//          {/* Object.keys(groupedPeople) = ["Teacher", "Artist", "Engineer"] */}
//         {Object.keys(groupedPeople).map((occupation, index) => (
//           <li key={index}>
//             <h3>{occupation}</h3>
//             <ul>
//               {groupedPeople[occupation].map((person, idx) => (
//                 <li key={idx}>
//                   {person.name} - {person.age} years old
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function findYoungestAndOldestPerson() {
  const people = [
    { name: "Alice", age: 25, occupation: "Teacher" },
    { name: "Bob", age: 30, occupation: "Artists" },
    { name: "Adam", age: 35, occupation: "Teacher" },
    { name: "Charlie", age: 28, occupation: "Engineer" },
    { name: "David", age: 22, occupation: "Artists" },
    { name: "Eve", age: 35, occupation: "Teacher" },
  ];

  const ages = people.map(person => person.age);

  const youngestAge = Math.min(...ages);
  const oldestAge = Math.max(...ages);
// === : stictly equal -> '5' = 5 -> false / == : '5' = '5' -> ok
  const youngestPer = people.find(person => person.age === youngestAge);
  const oldestPer = people.find(person => person.age === oldestAge);

  return (
    <div>
      <h2>Youngest Person is {youngestPer.name}, {youngestPer.age} years old</h2>
      <h2>Oldest Person is {oldestPer.name}, {oldestPer.age} years old</h2>
    </div>
  );

}

export default findYoungestAndOldestPerson;
