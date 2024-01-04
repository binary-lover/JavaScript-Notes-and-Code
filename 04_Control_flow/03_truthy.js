const userEmail  = undefined


if (userEmail){
    console.log("User email found..!");
} else{
    console.log("Email not found..!");
}

// ********** Truty and  falsy value **********

// Falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// other are truty values like 

// '0', "false", " ", [], {}, function(){}


// check of empty object
const myObject = {}
if(Object.keys(myObject).length){
    console.log("have values");
} else {
    console.log("object is empty");
}


// nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

// console.log(val1);

// terniary Operato (?)


// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("lesser") : console.log("greater");