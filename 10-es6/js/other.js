'use strict';

console.log("executing other.js");

//Note: This fails if index.js is a module
//console.log("other.js sees monster2Copy as", monster2Copy);

// I get an error here, since monsterArray was already made in 
// another file
//const monsterArray = ["King Kong", "Godzilla"];

// import from the index.js module
import {monsterArray} from './index.js';
console.log("see the monsterArray imported from index.js", 
    monsterArray);