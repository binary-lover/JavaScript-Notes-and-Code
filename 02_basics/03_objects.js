// singleton if made through constructor
// Object.create()

// ******** object literals ***********

const mySym = Symbol("key1")

const jsUser = {
    Name :"binarylover",
    "full name":"danish ahmad",
    [mySym]:"mykey1",  // using symbol inside object
    age:20,
    location:"Jaipur",
    email:"binarylover@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// type is object
console.log(typeof jsUser);

// accesing elements of the objects have 2 ways
// one is dot method which is common but using [] also can be accesed and speacially for symbols and key with space in it

console.log(jsUser.Name);
console.log(jsUser["email"]);
console.log(jsUser["lastLoginDays"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]); // accesing symbol



// Object.freeze(jsUser)
jsUser.email = "newemail@gmail.com" // will not change as object is frozen

console.log(jsUser);

jsUser.greeting = function (Name) {
    console.log(`hello ${Name}`);
}

jsUser.greetingTwo = function(){
    console.log(`hello ${this.Name}`);
}
jsUser.greatingThree = () =>{
    console.log(`hello ${this.Name}`);  // this keyword will not work withArrow funciton
}

jsUser["greeting"]("sonu")
jsUser.greetingTwo()
jsUser.greatingThree()
