const score = 400;

const balance = new Number(23000.658)

// console.log(score );
// console.log(balance);

// console.log(balance.toString().length); 
// console.log(balance.toFixed(2));

const  otherNumber = 34.596
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));


// console.log(Number.MAX_VALUE); // gives max range of Numbers in javascript



// **************** Maths ***************

console.log(Math);
console.log(Math.abs(-3));  // Work like Mod |x|
console.log(Math.round(4.3)); // .round() is a function
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,3,2,6,5));
console.log(Math.max(4,3,2,6,5));

console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

const betweenTentoTwenty = Math.floor(Math.random()*(max-min)+1) + 9;  // Generate number between 10-20 (both incluted)
console.log(betweenTentoTwenty);

const oneToHundred = Math.floor(Math.random()*100 + 1)
console.log(oneToHundred);

let  x = 0;
let arr = [];
while(x<100){
    const between15to35 = Math.floor(Math.random()*(35-15 + 1) ) + 15  // It will generate numbe in (15,35)
    x++;
    arr.push(between15to35)
}
console.log(arr.sort());


// Math.foor(Math.random()*(max - min + 1)) + min  // it will genrate any range of number

