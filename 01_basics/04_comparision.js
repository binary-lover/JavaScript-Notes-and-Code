// console.log(2 > 1);
// console.log(2 != 1);

// console.log("2"  > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);     // All result to false
// console.log(undefined <= 0);
// console.log(undefined < 0);


// ===

console.log("2" == 2);
console.log("2" === 2);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory type

// Stack (Premitive), Heap (Non-premitive)

// primitive using stack here
let myYouotubename = "Binarylover";

let anotherName = myYouotubename;
anotherName = "Bad kings";

console.log(myYouotubename);
console.log(anotherName);


// non-premitive - object using heep memory
let user = {
    name:"binarylover",
    email:"binarylover@gmail.com",
    UPI:"user1@ylp"
}

let user2 = user;
user2.name = "binarylover2"

// console.log(user.name);
// console.log(user2.name);