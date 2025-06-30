function AreAllTeenagers() {
  const people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]
    const allAreTeenager = people.every(people => people.age >= 13 && people.age <= 20);

  return  (
    <div>
        {allAreTeenager ? (
            <h1>Everyone is teenagers</h1>
        ) : (
            <h1>Everyone is not teenagers</h1>
        )}
     </div>);
}

export default AreAllTeenagers;