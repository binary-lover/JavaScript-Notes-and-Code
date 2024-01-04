// for

for (let index = 0; index < 100; index++) {
    // const element = 100;
    // console.log(index);
    
}

for (let i = 1; i<=10; i++){
    // console.log(`Outer loop, ${i}`);
    // console.log(`\n****** Table of ${i} *******`);
    for (let j = 1; j <= 10; j++) {
        const element = j;
        // console.log(`Inner loop, ${element}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}
myArray = ["lucky",2,3,4,5,"rohit"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// Break and Continue

for (let i = 0; i < 21; i++) {
    if(i==5){
        continue
    }
    console.log(`Value of i is ${i}`);
    
}

