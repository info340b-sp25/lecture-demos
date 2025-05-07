'use strict';


// Define a function that takes a function as an argument, and executes it 
// with your name as a variable. (with literal, or with a "full definition")

function nameVar(otherFunct) {
  otherFunct("Mara");
}

// Define a variable that switches the "argument" function
let argumentFunct = undefined;

// Button 1 should run this "higher order" function
// Button 2 & 3 should switch the "argument" function between
// concatinating this with the name of the person next to you
// or concatinaing with my name "Mara"
function button1fn(){
  nameVar(argumentFunct);
}

function button2fn(){
  argumentFunct = (function(firstWord) {
    console.log(firstWord + " Kirdani-Ryan");
  });
  console.log("button 2");
}

function button3fn(){
  argumentFunct = (function(firstWord) {
    console.log(firstWord + " University of Washington <3");
  });
  console.log("button 3");
}

let displayFunction = alert;

function useAlert(){
  displayFunction = alert;
}

function useConsoleLog(){
  displayFunction = console.log;
}

function sayHelloWorld(){
  displayFunction("Hello World");
}

function delaySayHelloWorld(){
  // call the sayHelloWorld function after
  // 5 seconds
  setTimeout(sayHelloWorld, 1 * 1000);
}

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]


console.log(
  peopleArray.reduce(
    function(accumulation, newItem) {
      console.log(accumulation);
      return accumulation + "->" + newItem.name;
    }, ""
  ))

const phoneDigits = [7,6,4,3,1,6,1]
const largest = phoneDigits.reduce(function(prev, curr) {
  if (prev > curr) {
    return prev;
  } else {
    return curr;
  }
})

console.log(largest);

console.log(peopleArray);
