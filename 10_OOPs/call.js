function setUsername(name) {
    this.username = name;
    // console.log("set func called");
}
function createUser(username, email, password) {
    // setUsername(username) it will not work because it will set username to global object
    setUsername(this,username) // it will set username to current object
    this.email = email;
    this.password = password;
}

const user1 = new createUser('John', "example@gmial.com", "123456");
console.log(user1);