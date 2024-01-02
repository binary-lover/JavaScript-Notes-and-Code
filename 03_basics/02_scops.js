
let a = 300
if (true){
    let a = 10;
    const b = 20;
    var c = 30; // var scope is global so we do not use this in genral for declare 
    d = 23; // this is same as the var keyword scope is also global
    // console.log(`inner ${a}`);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()


if (true){
    const name = "rahul"
    if (!false){
        let age = 23
        console.log(name);
    }
    // console.log(age); //will through error coz age is being accessed out of its scope
}

// console.log(name);  // will through error coz name is being accessed out of its scope


// +++++++++++++++ interesting example +++++++++++++++

addOne(5); // we can acess normal func before initialization
function addOne(num){
    return num+1;
}


addTwo(5); // but cann't access varable func before initialization
const addTwo = function addTwo(num){
    return num+1;
}
