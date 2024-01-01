const accountId = 1443
let accountEmail = "lucky@gmail.com"
var accountPawword = "12345" 
accounCity = "jaipur" // also possible
let nameOfBook
// accountId = 2    // Not allowed as it defined as const

accountEmail = "lu@co.in"
accountPawword = "23434"
accounCity = "Delhi"
/*
prefer not to use var
because of issue in block scope and funcitonal scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPawword, accounCity, nameOfBook]) // .table print all variable in tabular form

