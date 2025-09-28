const accountId = 1342
let accountEmail = "tannujas@google.com"
var accountPassword = "jas@123"
accountCity = "Jaipur"

//accountId = 2 //not allowed
accountEmail = "tannumahur@google.com"
accountPassword = "Jas@1234"
accountCity = "Bengaluru"
let accountState;
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);// If you don't want to use again and again console.log(); then we can use it console.table([])

/* 
let and var both are chnage the value and we are only use let not var

prefer to use var Bacause var give the issue in block scope and functional scope 
example if use var accountPassword = "jas@123" so it will be change whole code.
*/