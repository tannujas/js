/***************object part 2 *******************/

//singlton object

//const tinderUser = new Object() //singlton object always come as empty {}
const tinderUser = {} //non singlton object it also come as empty {}

tinderUser.id = "123abc"
tinderUser.email = "chatgpt@google.com"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstName : "hitesh",
            lastName : "Choudhary"
        }
    }
}

/* console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname); */

//console.log(regularUser.fullname.userFullname.firstName);

//How to join two object

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
//const obj3 = Object.assign({} , obj1 , obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//whenever come the value from data base 

const users = [
    {
        id : 122,
        email : "t@gmail.com"
    },
    {
        id : 122,
        email : "t@gmail.com"
    },
    {
        id : 122,
        email : "t@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedIn'));


/******** object de- Strutured and JSON API intro ***********/

const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor : "Tannu"
}
//we can access value in two ways

//course.courseInstructor

/* const {courseInstructor} = course
console.log(courseInstructor); */

/* now time to de-structure object */
const {courseInstructor: Instructor} = course
console.log(Instructor);

/** How to exact JSON **/


// object format apis

/*{
  "name" : "tannu",
  "coursename" : "Js in hindi",
  "price" : "free"
} */

//array format apis
[
    {},
    {},
    {}
    
]
