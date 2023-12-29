const marvel_heros = ["thos","ironman","spidarman"]
const DC_heros = [ "superman", "flash", "batman"]

// marvel_heros.push(DC_heros);
// Concaticantion in javascript
const allHeros = marvel_heros.concat(DC_heros); // it returns new array and not modify original array
console.log(allHeros);

const allNewHeros = [...marvel_heros,...DC_heros ]; // another way to concadinate two array
console.log(allNewHeros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5,[1,0]]],[12,123]];
let realAnotherArray = anotherArray.flat(Infinity); // it returns all nested array to flat single array
console.log(realAnotherArray);

// typecasting to array

console.log((Array.isArray("bianrylover"))); // retrun true of flase 
console.log(Array.from("binarylover"));   // create array of given arguement
console.log(Array.from([1,2,3]));   // create array of given arguement


console.log(Array.from({"name":"hitesh"})); // Interestingly it will retrun empty list as here not specified either keys or values should be in list


let score1 = 200
let score2 = 100
let score3 = 300

console.log(Array.of(score1,score2,score3));
console.log(Array.from([score1,score2,score3]));