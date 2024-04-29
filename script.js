// Unary Operators
/*
let a = 5;
let b = 2;

//a++; //increment
//b--; //decrement
console.log("a++ =", a++);
console.log(a);
*/

//Assignment Operators
/*
let a = 5;
let b = 2;

a += 4; // a = a + 4;
console.log("a =", a); //9
*/

// Comparison Operators
/*
let a = 5;
let b = "5"; //string -> number

console.log("a == b", a == b);
console.log("a > b", a > b);
*/

//logical Operators
//( && , ||, ! ) || -> pipe symble
/*
let a = 5;
let b = 2;

let cond1 = a > b; //true
let cond2 = a === 5; //true

console.log("cond1 && cond2 =", cond1 && cond2);
*/

// Conditional statements
/*
let age = 25;

if (age > 18) {
  console.log("You can Vote");
}
*/

// odd or even ?
/*
let num = 13;
if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}
*/

// else if statements
/*
let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === blue) {
  color = "blue";
} else if (mode === pink) {
  color = "pink";
} else {
  color = "white";
}
console.log(color);
*/

// Ternary operator
//-> a ? b : c;
//alternative of if else operator
/*
let age = 25;
let result = age >= 18 ? "Adult" : "not adult";
console.log(result);
*/

/*
let num = prompt("enter a number");
if (num % 5 === 0) {
  console.log(num, "is multiple of 5");
} else {
  console.log(num, "is not a multiple of 5");
}
*/

/*
let score = prompt("enter a number");
let grade;
if (score >= 80 && score <= 100) {
  grade = "A+";
} else {
  grade = "F";
}

console.log(grade);
*/

//Loops in js

//for loop
/* for (let i = 1; i <= 5; i++) {
  console.log("Sk");
}


for (let count = 1; count <= 5; count++) {
  console.log("SK");
}



// while loop
 while (condition){
  //do some work
 }

let i = 1;
while (i <= 10) {
  console.log("Sk");
  i++;
}
 

//do while loop
let i = 20;
do {
  console.log("SK");
  i++;
} while (i <= 20);
*/

// let str = "Kabir";
// console.log(str[3]);

//Template literals
// let sentence = `This is a template literals`;
// console.log(typeof sentence);

// Template Literal -> String Interpolation
// let obj = {
//   item: "pen",
//   price: 10,
// };

// let output = `The cost of ${obj.item} is \n ${obj.price} taka`;
// console.log(output);

//String method in Js
// let str = "shahria kabir";
// let str2 = "Love you";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.slice(0, 4));
// console.log(str.concat(str2));
// let res = str.concat(str2);

// console.log(res);

// console.log(str.replace("kabir", "Kabir"));
// console.log(str.charAt(3));

//Lets Practise

// let fullName = prompt("Enter your full name without spaces");
// console.log(fullName);
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

//Learning Arrays
// let heros = ["ironman", "superman", "hulk", "Batman", "Spiderman"];
//looping over an Array
//for loop
// for (let i = 0; i < heros.length; i++) {
//   console.log(heros[i]);
// }

//best - for of loop
// for (hero of heros) {
//   console.log(hero);
// }
