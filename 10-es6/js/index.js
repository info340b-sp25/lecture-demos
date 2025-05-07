'use strict';

const monsterArray = [
  {name: 'Dracula', type: 'vampire', height: 64},
  {name: 'Frankenstein', type: 'zombie', height: 74},
  {name: 'Mr. Hyde', type: 'mad scientist', height: 69},
  {name: 'Mummy', type: 'mummy', height: 69},
  {name: 'Creature from the Black Lagoon', type: 'fish', height: 71}
]
export default monsterArray

export function sayHello() {
  return "Hello from index"
}

console.log(monsterArray)

// DRACULA (vampire)

const nameArray = monsterArray.map((monster) => {
  let name = monster.name
  let type = monster.type
  return name.toUpperCase() + " (" + type + ")"
})

// Make a copy of the MonsterArray (using ...) with 
// a new monster, of your choosing, that has an additional
// property (beyond name, type, height), that's also defined
// with spread

// Make a new monster (with an extra property)
const dracWithFeeling = {emotion: 'fear', ...monsterArray[0]}
console.log(dracWithFeeling);

// Make a new array, with the extra monster
function printFeeling({emotion}) {
  console.log(emotion);
}
printFeeling(dracWithFeeling);
// Then, define a function that logs out this new property
// using destructuring in the function paramter


const myArray = [1,2,3]
const [x,y,z] = myArray;

const [a,b,c,d,e] = monsterArray;

const {name, type, height} = a;
// console.log(name, type, height)

function idMonster({name, type}) {
  return name.toUpperCase() + " (" + type + ")";
}

const ogMonster = a;
const copyMonster = {...a};
// console.log(ogMonster === copyMonster);