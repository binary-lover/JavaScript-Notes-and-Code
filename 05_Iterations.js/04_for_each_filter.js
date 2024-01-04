const coding = ["js","rupy","python","cpp","java"]

coding.forEach( function (item){
    // console.log(item);
} )

// Arrow funciton
coding.forEach((item)=>{
    // console.log(`I am Learing ${item}`);
})

coding.forEach(element => { // () is optional as we can give directely arguement
//    console.log(element); 
});

// calling funciton instead of defining in forEach(...)
function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{  // forEach brings 3 arguement bydefalut item, index adn arr likewise
    // console.log(item, index, arr);
})

const mycoding = [
    {
        lang:"javascript",
        ext:"js"
    },
    {
        lang:"java",
        ext:"java"
    },
    {
        lang:"python",
        ext:"py",
    }
]


let counter = 0
mycoding.forEach(item=>{
    for (const key in item) {
        if (counter%2==0){
            // console.log(`Language is:- ${item[key]} `);
        }else{
            // console.log(`Extention is: ${item[key]}`);
        }
        counter++
    }
})


mycoding.forEach(item=>{
    // console.log(`lanugage is ${item.lang} \nExtention is ${item.ext}`);
})

// what if we want to store .forEach in a variablr
const values = coding.forEach((item)=>{
    // console.log(item); 
})
// console.log(values); // give undefined
// forEach loop does not return anything


// for solving the porblem of not retruning we will use "filter" to retrun the values
const myNums = [5,2,4,3,22,11]
// let newNum = myNums.filter( (num)=> num > 4)

let newNum = myNums.filter((item)=>{
    return item > 4
})
// have to use return keyword if scope is open like above
// console.log(newNum);


// also can beachived using forEach()
// we cann't return new array with some operation for that we neet to use .map()
const newNums = []
myNums.forEach( (num)=>{
    if(num>3){
        newNums.push(num)
    }
})
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const filteredBook = books.filter((bk)=> bk.genre==='Non-Fiction')
let myFilterdBook = []
const filteredBook = books.filter((bk)=>{
    if (bk.genre === "Non-Fiction"){
        myFilterdBook.push(bk.title)
    }
})
// console.log(myFilterdBook);

// more filter
const publishFilter = books.filter((bk)=>{
    return bk.publish>1995 && bk.genre === "History"
})
// console.log(publishFilter);