// for off & for in

const arr = [1,2,3,4,5]

// for off

for (const item of arr) {
    // console.log(item); // print elemensts in arr
} 

const greatings = "hello world!"
for (const greet of greatings) {
    // console.log(greet);
}

// Maps

const map = new Map()

map.set('IN',"India")
map.set('FR',"France")
map.set('USA',"United states of america")

// console.log(map.get('IN'));

for (const key of map) {  // each key entry will be store in array
    // console.log(key);
}

for (const [key,value] of map) { // [] will deal with key value pair
    // console.log(key, value);    
}

// object is not iterable in for of loop
const myObject = {
    'Game1':"GTA4",
    'Game2':"GTA5",
    'Game3':"Spiderman"
}
 
// making object iterable we can use for in loop
for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

// useing for in iterating an array
const myArray = ["js","c","cpp","py"]
for (const key in myArray) {
    console.log(myArray[key]);
    // process.stdout.write(myArray[key]+ " ") // this just print all array elemenst in one line
}
// for of loop print direct values of array but for in print index and not the actual values

// iterating maps using for in
for (const key in map) {
    // console.log(key); // no output as maps are not iterable
}

