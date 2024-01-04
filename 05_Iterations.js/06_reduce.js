// array.reduce() is used to add up the array in short and easy way
const myNums = [1,2,3,4,5]

const mytotal = myNums.reduce((acc, cVal)=>{
    // console.log(`${acc} , ${cVal}`);
    return acc+cVal
}, 0)
// console.log(mytotal);

// example of total sum in cart 
const shoppingCart = [
    {
        itemName:"Js course",
        price:2999
    },
    {
        itemName:"Android Dev course",
        price:4999
    },
    {
        itemName:"CyberCecurity course",
        price:12999
    }
]

const totalBill = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0)
// console.log(totalBill);