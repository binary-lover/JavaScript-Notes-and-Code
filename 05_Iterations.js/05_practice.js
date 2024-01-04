// using map() we can edit array which is not possible in case of an array
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num)=>{
    return num>3
})
// console.log(newNums);

// in array.map() each operation can be done on each elements like retrun new array with 10 added
// and if we use comaprisan operator it retrun true or false 

// unlike in array.filter() where new array can be retured for comparision check like new array > 4
// and if we use arithmetic operation whole array without any changes retrurns

// on the othter hand array.forEach() doesn't return anything or just undefined



// *********** chaining **********

const num1 = myNumbers
    .map((num)=> num*10)
    .map((num)=> num+1)
    .filter((num)=>{
        if(num%3==0){
            return num
        }
    } )

console.log(num1);