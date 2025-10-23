//{} This is called scope
//var c = 300 //and any value declared outside that is call global scope

/* let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER :", a);
   // var c = 30
}*/  // This is called block scope

//console.log(a);
//console.log(b);
//console.log(c);

/* function one(){
    const username = "Tannu"
    function two(){
        const website = "youtube"
        console.log(username);
    } 
   // console.log(website);// givene error not access

   //two()
}*/
// one()// not call 

/*-------- Same work in the if else ----- */

/* if(true){
    const username = "Tannu"
    if(username === "Tannu"){
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website); // not access
} */
//console.log(username); // not access

// +++++++++++++++++++ Interesting part ++++++++++++++++++++

/* function addone(num){
    return num + 1
}
addone(5) */


/* addone(5) 
function addone(num){
    return num + 1
} */

//console.log(addone(5))

/*function addone(num){
    return num + 1
}*/
//console.log(addone(5))


/* const addtwo = function(num){
    return num = 2
}
addtwo(5) */

addtwo(5)
const addtwo = function(num){
    return num = 2
}
