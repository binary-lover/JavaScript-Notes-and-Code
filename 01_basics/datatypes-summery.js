// primitive 

// ****** 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail = undefined;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id == anotherId);  // shows the uniqueness
const bigNumber = 1222222222222223333321111113n  // add 'n' in last of the number
console.log(bigNumber);

// Javascript is Dynamically typed language

// Refrence/Non-premitive 

// ***** Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "tony stank"]

let myObj = {
    name: "hitesh",
    age:"23",
    mp:'close'
}
// console.log(myObj);
const myFunction = function(){
    console.log("lucky");
}

myFunction()
console.log(typeof "lucky");
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


// ********** Summary ********
// typeof anotherId => symbol
// typeof heros => Object
// typeof myObj => Object
// typeof myFunction => funciton object
// typeof String = > string