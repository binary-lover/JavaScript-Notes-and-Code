// Array (object)

const myArr = [0,1,2,3,4,5]
const myHeros = [ "ironman","dr. strange","Spiderman"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0]);


// Array methods

// myArr.push(22)  // push values at the end
// console.log(myArr);

// myArr.pop()  // remove last element of the array

// myArr.unshift(9) // add elements in the begening
// console.log(myArr);
// myArr.shift() // remove begening element
// console.log(myArr);

// console.log(myArr.includes(9)); // tells weather 9 is present or not
// console.log(myArr.indexOf(3));


const newArr = myArr.join()  // join method copy all elements of array to newArr in string format

// console.log(myArr);
// console.log(newArr); 


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)  //It manupulates the original array by taking out all elements mention in arguements
console.log(myn2);
console.log("C",myArr);




// ********** Array methods ************

// concat()

// Array() // sonstroctor

// copyWithin()

// entries()

// every()

// fill()

// filter()

// find()

// findIndex()

// findLast()

// findLastIndex()


// flat()

// flatMap()

// forEach()

// includes()

// indexOf()

// join()

// keys()

// lastIndexOf()

// map()

// pop()

// push()

// reduce()

// reduceRight()

// reverse()

// shift()

// slice()

// some()

// sort()

// splice()

// toLocaleString()

// toReversed()

// toSorted()
// toSpliced()
// toString()
// unshift()

// values()
