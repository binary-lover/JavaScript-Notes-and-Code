// If statement

if(true){
    console.log("Condition is ture");
}

// <, >, <=, >=, ==, !=,
// === -> check for type also

if (2==="2"){
    console.log("Equal");
} else if (2!= 3){
    console.log("Unequal");
}

// let score = 200
// if (score<300){
//     score+=122
// }

// console.log(score);


// shorthand condition
// const balance = 1000
// if (balance>100) console.log("test");

// && and or | operator
userLoggedIn = true
debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2 ){
    console.log("allow to buy");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged In");
}


