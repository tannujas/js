/*let score = 33
console.log(typeof score);
console.log(typeof (score)); //you can write also it in Parentheses() 
console.log(score) */  // 33

/*let score = "33"
let valueInNumber = Number(score) //value convert in number
console.log(typeof (valueInNumber)); */

//if you want that what is the value
/*let score = "33abc"
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber) */  // NaN (Not a number)

/* let score = null
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber) */ //0

/* let score = undefined
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber) */ //nan

/* let score = true
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber) */ // true = 1 and false = 0

/* let score = "Tannu"
let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber)  */ // nan

/*let isloginId = 1
let booleanIsLoggedIn = Boolean(isloginId)
console.log(typeof (booleanIsLoggedIn));
console.log(booleanIsLoggedIn)*/ // 1 = true 

/* let isloginId = ""
let booleanIsLoggedIn = Boolean(isloginId)
console.log(typeof (booleanIsLoggedIn));
console.log(booleanIsLoggedIn)  */ //  "" = false

/*let isloginId = "Tannu"
let booleanIsLoggedIn = Boolean(isloginId)
console.log(typeof (booleanIsLoggedIn));
console.log(booleanIsLoggedIn) */ // "Tannu" = true

/*let isloginId = 0
let booleanIsLoggedIn = Boolean(isloginId)
console.log(typeof (booleanIsLoggedIn));
console.log(booleanIsLoggedIn)*/ // 0 = false

/* let somenumber = 33
let stringNumber = String(somenumber)
console.log(typeof (stringNumber));
console.log(stringNumber) // 33 = string */


/************************ Operations ***************/

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2%3);

/* let str1 = "Hello"
let str2 = " Jas"
let str3 = str1 + str2
console.log(str3);  // Hello Jas */

/* console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); //if String is first then every value count as a string - 122
console.log(1 + 2 + "2"); // if string is last then first  values will conversion - 32 */

//console.log(+true);
//console.log(+ "");

//let num1 , num2 , num3
// num1 = num2 = num3 = 2 + 2

/* let gameCounter = 100;
gameCounter++;
console.log(gameCounter); */

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

//link to study
//https://tc39.es/ecma262/#sec-type-conversion

//link to study

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
