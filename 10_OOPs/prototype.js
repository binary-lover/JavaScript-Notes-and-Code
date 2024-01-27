function setName(myName){
    this.myName = myName;
}

setName.prototype.trueLength = function(){
    let trueString = ""
    for (let index = 0; index < this.myName.length; index++) {
        const element = this.myName[index];
        if(element === " "){
            continue;
        }
        trueString+=element;
    }
    console.log(`True length of ${trueString} is: ${trueString.length}`);
}

// let myName = new setName("binary-lover"); 
// let name2 = new setName("ahmad ansari          ")

// myName.trueLength()
// name2.trueLength()

// another way to trim string
String.prototype.trueLength2 = function (){
    console.log(this);
    console.log(`true length is ${this.trim().length}`);
}
"lucky ansari".trueLength2()