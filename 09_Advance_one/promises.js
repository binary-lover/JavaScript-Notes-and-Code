const promiseOne =  new Promise((resolve, reject)=>{
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("async task is complete");
        resolve()
    }, 1000);
});

promiseOne.then((result) => {
    console.log("promice completed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("hey there");
        resolve();
    }, 1000)

}).then(function(){
    console.log("lucky");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"binary-lover",email:"binary@lover.com"})
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
})