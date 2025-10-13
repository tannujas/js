//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log(2 != 1);

/* console.log("2" > 1);
console.log("02" > 1); */ // don't compare different data types together it is not good

/* console.log (null > 0); // false
console.log (null == 0);//false
console.log (null >= 0);//true 

//The reason is that the equality check == and comparision > , < , >=  ,<= work different

//comparision convert null to a number treating as a 0 that's why (3) null >=0 is true and (1) null > 0 is false.

console.log (undefined == 0);
console.log (undefined > 0);
console.log (undefined < 0); */ //we avoid these type of conversion

// === strick check

console.log("2" === 2);
