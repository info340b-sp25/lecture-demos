'use strict';

console.log("Hello world!");

console.log("This is the next thing in order to run");

console.log("This runs after the previous two lines");

let exampleMessage = "This is a string saved in a variable";

let exampleNumber = 42;

let exampleNotSaved;

console.log("exampleMessage is", exampleMessage);
console.log("exampleNumber is", exampleNumber);
console.log("exampleNotSaved is", exampleNotSaved);

const x = 3;
//x = 4; // give a type error

let y = 1.5;
y = 2; // this is ok

// type coersion does some weird things
// beware of places where this can do confusing things
console.log("40 + 2", 40 + 2);
console.log("'40' + 2", '40' + 2);
console.log("'40' - 2", '40' - 2);

const num = 10;
const str = '10';

// what are the values of each expression?
console.log("num == str", num == str);
console.log("num === str", num === str);
console.log("'' == 0", '' == 0);


///// Arrays

// create an array 
const lettersArray = ["a", "b", "c"];
console.log("lettersArray starts as: ", lettersArray);

// even though we used const, we can change what is IN the array
lettersArray[1] = "B";
console.log("lettersArray is now: ", lettersArray);

// can't replace with an entirely new array, since it is const
//lettersArray = ['d', 'e', 'f']

// I can add something by setting it at a new index
lettersArray[4] = 'f';
console.log("lettersArray is now: ", lettersArray);

console.log("current length", lettersArray.length);

// I can use other methods, like push to add to end
lettersArray.push('z');
console.log("lettersArray is now: ", lettersArray);


///// Objects

const agesObj = {sarah:42, amit:35, zhang:13};
console.log("agesObj", agesObj)

// looking up values
console.log("agesObj['sarah']", agesObj['sarah'])
console.log("agesObj.sarah", agesObj.sarah)

// if I want a array of the keys
console.log("Object.keys(agesObj)", Object.keys(agesObj))

// what if I want to save a key in a variable?
const agesKey1 = Object.keys(agesObj)[0]
console.log("agesKey1", agesKey1)

// agesObj.agesKey1 
// does not work, is trying to find the 'agesKey1' entry

console.log("agesObj[agesKey1]", agesObj[agesKey1])


// a fake dataset to practice on
const people = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
];
 
console.log("people", people);

// for loop to go through all people objects
// Java style
for(let i=0; i < people.length; i++){
    const person = people[i];
    console.log("person", i ,"is", person)
}

// for loop to go through all people objecs
// python style
for(const person of people){
    console.log("person is", person);
}

// for a person object, go through all key/value pairs
const person1 = people[0];
for(const key of Object.keys(person1)){
    console.log("key", key, "value", person1[key])
}

// can also use "in" version
for(const key in person1){
    console.log("key", key, "value", person1[key])
}


/////// functions

function greet(greeting, name){
    return greeting + ", " + name;
}

console.log(
    "greet('hello', 'Kyle')", 
    greet('hello', 'Kyle')
);

// a second way of defining functions is to save
// a function into a variable
const multiply = function(num1, num2) {
    return num1 * num2;
}

console.log(
    "multiply(3,4)",
    multiply(3,4)
);