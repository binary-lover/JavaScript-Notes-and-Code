function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let a = 0;
// let arr = []
// while (a<100) {
//     let num = generateRandomNumber(20,40);
//     if(!arr.includes(num)){
//         arr.push(num)
//     }
//     a++;
// }
// console.log(generateRandomNumber.prototype);


function createUser(username,score){
    this.username = username;
    this.score  = score;
    
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const newuser = new createUser("lover",23);
const newuser2 = new createUser("binary",222);

newuser2.increment()
newuser2.printMe()

console.log(newuser.score);