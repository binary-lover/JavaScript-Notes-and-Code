const user = {
    name:"hitesh",
    price:999,
    welcomeMassege: function lucky(){
        console.log(`${this.name} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMassege()
// user.name = "mohit"
// user.welcomeMassege()

// console.log(this);      // here we are in node environment and 'this' is reffering to an empty object
// but not in the case of browser, in broweser things are different and this will print non-emply object
// in broweser global object is "window" object


// 'this' in any funciton will get output of so many things as object
function chai(){
    let username = "hitesh"
    console.log(this);
}

// chai();


// arrow funciton

const one = function(){
    let username = "hitesh"
    console.log(this.username);  //undefined
}
// one()

const two = () => {
    let username = "hitesh"
    console.log(this);
}
// two()

// const addTwo = (num1,num2) =>{
//     return num1+ num2
// }

// or we can use implisit function
// const addTwo = (num1,num2) =>  num1+ num2

// const addTwo = (num1,num2) =>  (num1+ num2)

// for return object we need to use parentheses and iside we can use {} for object
const addTwo = (num1,num2) =>  ({username:"hitesh"})

const sum = addTwo(2,3);
console.log(sum);
