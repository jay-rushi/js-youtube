const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
also there are 2 var let and var are the only 2 var
const is also like it but constant and all three are used to store values hence variables
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
