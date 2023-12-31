function syaMyName(){
    console.log("lucky ansari");
}

// syaMyName()

function add(a=3,b=4){
    return a+b
}

let sum = add(2,3);

// console.log(sum);

function logInUser(username){
    if (username === undefined) {   // username === undefined or !username work same
        return "please enter a valid username..!"
    }
    return `${username} just logged in`
}

result = logInUser("")
console.log(result);

// what if we dont know acsactly how many peremetes will it gives

function calculatePrice(val1, val2, ...num1){  // rest operator
    return num1
}

// console.log(calculatePrice(343,34,21,123));

function objectHandle(anyObject){
    console.log(`username: ${anyObject.username} \npassword: ${anyObject.password} \nAddress: ${anyObject.address}`);
}       // be carefull about type checing if extractinge property exist or not

const mycrediential = {
    username:"binarylover",
    password:"kdfjioe#@$3kejr@sSER3$I#($$DFWDOSMen3JD(3"
}

objectHandle(mycrediential)
objectHandle({
    username:"mohit",
    password:"efk3##F#KDr9S*e)#JF03fjjr#$*44",
    address:"delhi"
})

const mynewArray = [324,34,3,2,334,5554,11]

function returnSecondValue(array){
    return array[1]
}
console.log(returnSecondValue(mynewArray));