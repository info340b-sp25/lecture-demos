'use strict';

function button1fn(){
  console.log("button 1");
}

// switch to assigning an anonymous function to
// button2fn
// function button2fn(){
//   console.log("button 2");
// }
const button2fn = function(){
  console.log("button 2");
}


// Note: Switched to alert()
function button3fn(){
  //console.log("button 3")
  alert("button 3");
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
  setTimeout(sayHelloWorld, 5 * 1000);

  //note: This doesn't work the way you want
  // this calls sayHelloWorld instead of 
  // passing sayHelloWorld as a parameter
  //setTimeout(sayHelloWorld(), 5*1000)

}




//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

console.log("print each array item using forEach")
peopleArray.forEach(function(person){
  console.log(person);
});

console.log("get array of names, using the map function")
const names = peopleArray.map(function(person){
  const name = person["name"];
  return name;
});
console.log("names are", names);

console.log("making strings to say hello to all those names using map")
const peopleGreetings = names.map(function(name){
  return "Hello " + name + "!"
})
console.log(peopleGreetings)

console.log("Filter for short names using filter()")
const shortNamePeople = 
  peopleArray.filter(function(person){
    //return true to keep it
    // return false to get rid of it
    
    //return true only if the person name's length is 3 or less 
    return person.name.length <= 3
  })
console.log("shortNamePeople", shortNamePeople)


console.log("show reduce to add numbers together");
const nums = [1,2,3,4,5,6,7,8,9,10];
const sum = nums.reduce(function(item1,item2){
  return item1 + item2;
})
console.log("sum of", nums, "is", sum);

console.log("find maximum number using reduce")
const numerals = [2,6,7,2,5,7,1,7,5];
const maxNum = numerals.reduce(function(prev, curr){
  if(prev > curr){
    return prev;
  }else{
    return curr;
  }
});
console.log("max of", numerals, "is", maxNum);


//a more complicated question that uses multiple steps
// I want to say hello to all the people with short names
// map -> filter -> forEach
peopleArray.map(function(person) {
  return person.name;
}).filter(function(name) {
  return name.length <= 3;
}).forEach(function(name){
  console.log("Hello " + name + "! You have a short name!");
})

console.log("test short hand version of above")
// Just for fun, the extra short hand version
peopleArray
  .map((person) => person.name)
  .filter((name) => name.length<=3)
  .forEach((name) => console.log("Hello " + name + "! You have a short name!"));