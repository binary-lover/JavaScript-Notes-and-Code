
let a = 300
if (true){
    let a = 10;
    const b = 20;
    var c = 30; // var scope is global so we do not use this in genral for declare 
    d = 23; // this is same as the var keyword scope is also global
    console.log(`inner ${a}`);
}


console.log(a);
// console.log(b);
console.log(c);