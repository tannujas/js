//array methods

let Fruits = ["Apply" , "Mango" , "Orange", "guava"];

/*Fruits.push("Banana");
console.log(Fruits);*/

/*Fruits.pop();
console.log(Fruits);*/

/*Fruits.unshift("Banana");
console.log(Fruits); */

/*Fruits.shift();
console.log(Fruits);*/

/*console.log(Fruits.indexOf("Mango"));
console.log(Fruits.includes("Banana"));
console.log(Fruits.length);*/


/* const Vegetable = Fruits.join();
console.log(Fruits);
console.log(typeof Vegetable); */

//slice , Splice
// Interview question what is the different between slice and splice

/* console.log("A", Fruits);
const myn1 = Fruits.slice(1 , 3)
console.log(myn1);

console.log("B", Fruits);
const myn2 = Fruits.splice(1, 3 , "kiwi", "date",  "cherry")
console.log("C" , Fruits);
console.log(myn2);*/


/*************** Array Part 2 *******************/

const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "Flash", "Batman"]

//marvel_heros.push(dc_heros) //put only existing aaray
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros) //put new array
console.log(allHeros);

// Spread operator (Failana)

const new_all_heros =[...marvel_heros, ...dc_heros]
console.log(new_all_heros);

//output - both are working same concat, spread[ 'thor', 'Ironman', 'Spiderman', 'superman', 'Flash', 'Batman' ]
//[ 'thor', 'Ironman', 'Spiderman', 'superman', 'Flash', 'Batman' ]

/*const another_array = [1 ,2 , 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); */

/*console.log(Array.isArray("Tannu"))
console.log(Array.from("Tannu")) //convert value in array
consol.log(Array.from({name: Tannu})) //Interesting case meaning of that it can't be convert in array alway provide the output [] empty */

let score1  = 100;
let score2  = 200;
let score3  = 300;
console.log(Array.of(score1, score2, score3));//creates a new array from the values you give.