function FirstTeenager() {
  const people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]
    const firstTeenager = people.find(people => people.age >= 13 && people.age <= 20);

  return  (
    <div>
        <h1>The name of the first teenager is {firstTeenager.name}, {firstTeenager.age} years old</h1>
     </div>);
}

export default FirstTeenager;