class user {
    constructor (username,email,passwd){
        this.username = username
        this.email = email
        this.passwd = passwd
    }

    encryptPass(){
        return `${this.passwd}abc`
    }
}

const chai = new user("binarylover","abc@gmail.com","pass123");
console.log(chai.encryptPass());
