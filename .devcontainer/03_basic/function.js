/* function sayMyName(){
console.log ("T")
console.log ("a")
console.log("n")
console.log("n")
console.log("u") 
}

 /* ----- sayMyName //Reference 
() // excution ----- */

// sayMyName() */

/* function addTwoNumbers(number1 , number2){ //parameters
console.log(number1 + number2);
}
addTwoNumbers(3 , 4) //arguments */

/*function addTwoNumbers(number1 , number2){ 
    let result = number1 + number2 
    return result //return is function itself
}
const result = addTwoNumbers(3 , 4) 
console.log(result); */

/* function addTwoNumbers(number1 , number2){ 
    let result = number1 + number2 
     console.log("Tannu"); //print
    return result //return is function itself
    console.log("Tannu"); // not print
}
const result = addTwoNumbers(3 , 4) 
console.log(result); */

/*function addTwoNumbers(number1 , number2){ 
    return number1 + number2 
}
const result = addTwoNumbers(3 , 4) 
console.log("Result : " , result); */

/*function loginUserMessage(username){
    return `${username} just logged In` 
}

//console.log(loginUserMessage("Tannu"));
console.log(loginUserMessage());//whenever you don't pass the value then coming undefined value */

/* function loginUserMessage(username){
    /*if(username === undefined){
        console.log("Please enter the username")
        return
    }*/

    /*if(!username){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged In`
} 

console.log(loginUserMessage()); */

// if(!username), if(username === undefined) both are same

// if we pass the default value 

/* function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged In` 
}

//console.log(loginUserMessage());
console.log(loginUserMessage("Tannu")); */

//Rest operator and spread operator both are same but when we using it's depend on use case situation

/*function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 300 , 400 , 500)) */

//ask in the interview

/* function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 300 , 400 , 500)) */

//Function with Object
// how to access object in function 

/* const user = {
    username:"Tannu",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"sam",
    price: 199
}) */

//how to access array in function

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[2]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));

