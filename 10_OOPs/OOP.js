const user = new Object()
user.name = "lucky";
user.email = "w@gmial.com";
user.logInCount = 4;
user.logStatus = "sign in";
user.myfunciton = function(){
    return `got user detail..! of ${this.name}`
}
// console.log(user.myfunciton());

function siteuser(username, userLoginCount, isLoggedIn){
    this.username = username;
    this.userLoginCount = userLoginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}  

const user1 = new siteuser("binary-lover",12,true);
const user2 = new siteuser('shahid',11,false);
console.log(user1);