// const promiseOne =  new Promise((resolve, reject)=>{
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log("async task is complete");
//         resolve()
//     }, 1000);
// });

// // promiseOne.then((result) => {
// //     console.log("promice completed");
// // })

// // new Promise(function(resolve, reject){
// //     setTimeout(function(){
// //         console.log("hey there");
// //         resolve();
// //     }, 1000)

// // }).then(function(){
// //     console.log("lucky");
// // })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"binary-lover",email:"binary@lover.com"})
//     },1000)
// })

// // promiseThree.then(function(data){
// //     console.log(data);
// // })

// const promiceFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(error){
//             resolve({username:"bianrylover",mail:"syx@gmail.ocm"})
//         }
//         else{
//             reject("ERROR: unknown error")
//         }
//     },1000)
// });

// // promiceFive.then(function(data){
// //     console.log(data);
// // })

// async function consumePromiseFive(){
//     try {
//         const content = await promiceFive
//         console.log(content);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUser(){
//     try {
//         const respons = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await respons.json();
//         console.log(data);
//     } catch (error) {
//         console.log("some error accured",error);
//     }
// }

// getAllUser()

fetch('https://api.github.com/users/binary-lover')
.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log("some error",error);
})