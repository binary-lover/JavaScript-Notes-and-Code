// ********** by singleton ***********

const tinderUser = new Object();
// const tinderUser = {}

// type is object
console.log(typeof tinderUser);

tinderUser.id = "123abc"
tinderUser.Name= "noha"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"Threesum@gmail.com",
    fullname:{
        userFullName :{
            firstName:"hoha",
            lastName:"pots"
        }
    }
}
console.log(regularUser.fullname?.userFullName.lastName); // '?' used for doubt about the elements

// adding objects
const obj1= { 1: "a", 2:"b"}
const obj12= { 1: "a",14:'e', 2:"b"}
const obj2= { 1: "a",4:'d', 2:"b",23:"3df"} 

// it skip the value if key in both object is same 

// const obj3 = Object.assign(obj1,obj12,obj2) 
// batter to use {} as first arguement so that all the added object item goes to {} empty object 
// otherwire it will add in object which is in 1st place of arguement


// const obj3 = {...obj1,...obj12,...obj2} // spread operator
// console.log(obj1);
// console.log(obj12);
// console.log(obj2);
// console.log(obj3);


const users = [
    {
        id:1,
        email: "nomoney@gmailcom"
    },
    {
        id:2,
        email:"hey@gmialcom"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // it returns array of keys in tinderUser
// console.log(Array.from(Object.keys(tinderUser)));
// console.log(Array.from(Object.values(tinderUser)));

// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'Name', 'noha' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('id')); // check for keys


const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// Destructure of objects 

// console.log(course.courseInstructor);

const {courseInstructor:teacher} = course // hare we can direct access the values and modify keys
console.log(teacher);

const {price} = course
console.log(price);

const {courseName} = course
console.log(courseName);

// {
//     "name":"hitesh",
//     "coursNAme": " js in hindi",
//     "price":"free"
// }