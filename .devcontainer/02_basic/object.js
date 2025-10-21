//singlton (When we are talking about literal that time singleton are not using but when we are taking about constructor that time singlton are use.)

//object literals
const mySym = Symbol("key1") //use a symbole as a key

const jsUser = {
    name : "Tannu",
    "full name" : "Tannu jayswal",
    //mySym : "mykey1",
   [mySym] : "mykey1",
    age : 22,
    location : "Jaipur",
    email : "tannu@google.com",
    isLoggedIn : false,
    lastloginDays : ["Monday", "Saturday"]
}

// We can access the value two ways

console.log(jsUser.email)
console.log(jsUser["email"]) //THis is way just because of if we declared on more value with full name in doble inverted commma and it is always access in
console.log(jsUser["full name"])
/*console.log(jsUser.mySym)
console.log(typeof jsUser.mySym) */

console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

//How to change the value
jsUser.email = "tannu@chatgpt.com"
//Object.freeze(jsUser)
//how to lock the value (no one can be change the value)

/*jsUser.email = "tannu@microsoft.com"
console.log(jsUser); */

//how to declared the function in object

/* jsUser.greeting = function(){
    console.log("Hello js User");
}
console.log(jsUser.greeting);//[Function (anonymous)]
//console.log(jsUser.greeting()); */

jsUser.greetingtwo = function(){
    console.log(`Hello js User, ${this.name}`);
}
console.log(jsUser.greetingtwo());








