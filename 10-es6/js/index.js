'use strict';

// NOTE: Added export to make this work with modules
export const monsterArray = [
  {name: 'Dracula', type: 'vampire', height: 64},
  {name: 'Frankenstein', type: 'zombie', height: 74},
  {name: 'Mr. Hyde', type: 'mad scientist', height: 69},
  {name: 'Mummy', type: 'mummy', height: 69},
  {name: 'Creature from the Black Lagoon', type: 'fish', height: 71}
]
console.log(monsterArray);


////////// function definitions demo

//1. one standard way of writing a function
// function sayHello(name){
//   return "Hello " + name + "!";
// }

//2. anonymous function way of making a function
// const sayHello = function(name){
//   return "Hello " + name + "!";
// }

//3. anonymous function with the => notation
const sayHello = (name) => {
  //debugger; // this lets you force the dev tools to stop at this line
  return "Hello " + name + "!";
}

// 4. => with concise notation
// NOTE: we are not encouraging concise notation here
// const sayHello = (name) => "Hello " + name + "!";


console.log(sayHello("class"));


/////// destructuring demo
const myArray = [1, 2, 3];
const [x, y, z] = myArray;
// this is equivalent to:
// const x = myArray[0];
// const y = myArray[1];
// const z = myArray[2];

console.log("x", x);
console.log("y", y);
console.log("z", z);


const myObject = {a: 1, b: 2, c: 3};
const {a, b, c} = myObject;

console.log("a", a);
console.log("b", b);
console.log("c", c);

///////// Spreading demo
const first5Letters = ["a", "b", "c", "d", "e"];

// attempt 1: make first 7 letters array
// Note: This fails and makes an array inside an array
//const first7Letters = [first5Letters, "f", "g"];

// attempt 2: this one works correctly
const first7Letters = [...first5Letters, "f", "g"]

console.log("first7Letters", first7Letters)


const monster1 = monsterArray[0];
console.log("monster1", monster1)

// attempt 1, fails since it's the same object
// if I update the "copy", the original changes
//const monster1Copy = monster1;

// attempt 2: works, since updating the copy
// did not change the original
// NOTE: This doesn't help with objects/arrays inside the object
// it only works on one layer (shallow copy)
const monster1Copy = {...monster1};
monster1Copy.name = "Lestat";

console.log("was monster1 changed?", monster1);

// Add a feature to our a new copy of the object
const monster2Copy = {...monster1, alternateForm: "bat", age: 150};
console.log("monster2Copy", monster2Copy);



//////////////// Modules

// Turn this file in to a module, and decide which values to export
// Put export with monsterArray above