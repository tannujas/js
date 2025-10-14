//date
/* let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //date is object */

/* let mycreateDate = new Date(2025, 14, 10, 9, 58);
console.log(mycreateDate.toLocaleString()); */

/* let myTimeStamp = Date.now()
console.log(myTimeStamp); */
//console.log(mycreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let today = new Date()
/*console.log(today.getFullYear());   
console.log(today.getMonth());      
console.log(today.getDate());       
console.log(today.getDay());       
console.log(today.getHours());     
console.log(today.getMinutes());  
console.log(today.getSeconds()); */

today.toLocaleString('dafault',{
    weekday: "long",
})