// alert("hello from an external js file");

// var let and const
// var
// globally scoped
// can be redefined
// can be reassigned
// can be initialized

// var myName;
// myName = "godbless";

// console.log(myName);

// myName = "godbless";
// myName = "Uche";

// var myName = "godbless";

// myName = "Freeman";

// var myName = prompt("Hello what is your name?");

// console.log("Hello my name is " + myName);

// let and const (introduced in es6 javascript)

// both are locally scoped

// let
// cannot be redefined
// can be reassigned
// can be initialized

// const
// cannot be redefined
// cannot be reassigned
// cannot be initialized

// const myName;

// myName = "freeman";

// console.log(myName);

// myName = "godbless";

// console.log(myName);

// let myName;

// js data types
// primitive and reference
// primitive (number, string, boolean, undefined and null)

// let myName = "godbless";

// let myAge = 55;

// let sentence =
//   "Hello my name is " + myName + " and I am " + myAge + " years old";
//   `Hello my name is ${myName} and I am ${myAge} year old`;
`
// <div>
//     <h1>Hello world<h1>
// </div>
`;

// console.log(sentence);

// console.log(typeof myVar);

// operators
// arithmetic operator (+, -, *, /, %);

// let x = 13;

// let y = 5;

// console.log(x % y);

// alert("Hello welcome, please what is your name?");
// let myName = prompt("type your name here");
// alert(myName + " you are welcome to 2x multiplier investment");
// let amount = prompt("How much would you like to invest");
// alert("Congratulations, you now have " + 2 * amount + " thanks for choosing");

// assignment operator (=, +=, -=, *=, /=, %=);

// let x = 23;

// x = x + 6;

// x %= 6;

// x += 1;

// x--;

// console.log(x);

// comparison operators (>, <, >=, <=, ==, ===, !=, !==)

// console.log(!(7 > 8));

// logical operators (&&, ||, !)

// let myName = "godbless";

// console.log(myName.length);

// console.log(4 > 3 && 6 > 5 && myName == "godbless" && myName[0] == "g");

// console.log(myName.length);

// console.log(!(5 > 6 || 6 > 5 || 5 < 4));

// ternary opertor

// let x = 3;

// if (x === "3") {
//   console.log("true statement");
// } else {
//   console.log("false statement");
// }

// console.log(x === "3" ? "true statement" : "false statement");

// x = 5;

// x++;

// console.log(x);

// reference data types (arrays and objects)

// let myArr = new Array("godbless", "freeman", "lancelot");

// let myArr = ["newman", "gwain", "John"];

// console.log(myArr[myArr.length - 1]);

// let scores = [20, 34, 23, 66, 78, 99];

// console.log(scores);

// let person = {
//   name: "godbless",
//   email: "gb@gmail.com",
//   school: "uniben",
//   isMarried: false,
//   isAdmin: true,
//   age: 77,
//   course: "CSC",
//   subComb: ["mth", "phy", "csc", "gst"],
//   contact: {
//     fb: "freeman",
//     ig: "gb",
//   },
// };

// console.log(person["isAdmin"]);

// console.log(person.contact.ig);
// let myStr = "abcdefghi";

// string methods
// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String charAt()
// String split()

// string search methods
// String indexOf()
// String lastIndexOf()
// String search()
// String includes()
// String startsWith()
// String endsWith()

// String slice(startIndex, endIndex)
// String substring(startIndex, endIndex)
// String substr(startIndex, length)

// let myStr = "godbless";

// // console.log(myStr.slice(0, 3));
// console.log(myStr.substr(2, 6));

// let myStr = "Mango, Apple, Banana, Orange";

// console.log(myStr.substr(22, 6));

// using substr method print apple and banana;

// console.log(name.split("b"));

// let email = "freeman123@gmail.com";

// let userName = email.split("@")[0];

// console.log(userName);

// print freeman123 as my username

// let name = "godbless";

// console.log(name.charAt(name.length - 1));

// console.log(name.lastIndexOf("s"));

// console.log(name.endsWith("s"));

// looping through a string

// for loops

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let i = 1;

// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let str = "godbless";

// // for of loop is used to loop through a string
// for (let i of str) {
//   console.log(i);
// }

// let num = prompt("please enter a number");
// alert(num);

// const sentence = "I am a boy";

// const myArr = ["godbless", "freeman", "lancelot"];
// const myArr2 = ["me", "you"];
// myArr.unshift("freeguy");

// myArr.unshift("arthur", "seeker");

// delete myArr[0];

// console.log(myArr.concat());

// const newArr = myArr.concat(myArr2);

// const newArr = [...myArr, ...myArr2];

// console.log(newArr);

// array methods
// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()

// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(myArr.flat());

// const myArr = ["godbless", "freeman", "lancelot"];

// console.log(myArr.splice(0, 1));

// console.log(myArr);

// const person = {
//   name: "godbless",
//   email: "gb@gmail.com",
//   isMarried: true,
//   subjects: ["mth", "phy", "chm"],
// };

// console.log(person.subjects[1]);

// js loops
// for Loop
// while Loop
// for…in
// for…of

// for loop syntax

// for (initializer; bounary; increment) {
//   codeblock;
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for in loop is used to iterate through an object

// const person = {
//   name: "godbless",
//   email: "gb@gmail.com",
//   isMarried: true,
//   subjects: ["mth", "phy", "chm"],
// };

// for (let key in person) {
//   console.log(person[key]);
// }

// let myStr = "abcdefghijklmnopqrstuvwxyz";

// for (let i of myStr) {
//   console.log(i);
// }

// console.log(person);

// const myArr = ["godbless", "freeman", "lancelot", "mark"];

// myArr.push("ronaldo", "esxdrgvbh", "werty", "wertyu");

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// let i = 0;
// while (i < myArr.length) {
//   console.log(myArr[i]);
//   i++;
// }

// higher order array methods
// forEach
// map
// sort
// reduce
// filter

// const myArr = ["godbless", "freeman", "lancelot", "mark"];

// myArr.push("ronaldo", "esxdrgvbh", "werty", "wertyu");

// myArr.forEach((x, i) => {
//   console.log(i, x);
// });

// myArr.map((x) => {
//   console.log(x);
// });

// const myArr = [8, 5, 7, 9, 1];

// let sum = myArr.reduce((a, b) => a + b);
// console.log(sum);

// let acc = 0;
// for (let i = 0; i < myArr.length; i++) {
//   acc += myArr[i];
// }
// console.log(acc);

// console.log(myArr.sort((a, b) => a - b));

// js conditionals

// let color = "pink";
// color = "blue";

// if (color === "red") {
//   console.log("the color is red");
// } else {
//   console.log("the color is not red");
// }

// if (color === "red") {
//   console.log("the color is red");
// } else if (color === "blue") {
//   console.log("the color is blue");
// } else if (color === "green") {
//   console.log("the color is not green");
// } else {
//   console.log("none of the above");
// }

// let color = "blue";

// switch (color) {
//   case "red":
//     console.log("the color is red");
//     break;
//   case "blue":
//     console.log("the color is blue");
//     break;
//   case "green":
//     console.log("the color is green");
//     break;
//   default:
//     console.log("none of the above");
//     break;
// }

// let color = "blue";

// if (color === "red") {
//   console.log("th color is red");
// } else {
//   console.log("the color is blue");
// }

// console.log(color === "red" ? "color is red" : "not red");

// break and continue
// for (let i = 0; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// let grades = ["A", "B", "C", "F"];

// let filteredArr = grades.filter((grade) => grade != "F");

// console.log(filteredArr);

// js functions

// 1) Regular function
// function functionName(){
//     codeblock;
// }

// 2) Arrow function
// const functionName = () => {
//   codeblock;
// };

// function greet() {
//   console.log("Hello Favour");
// }

// greet();

// const greet = () => {
//   console.log("Hello Favour");
// };

// greet();

// function greet(name = "godbless", time = "morning") {
//   console.log("Hello " + name + " good " + time);
// }

// greet("lancelot", "night");
// greet("lancelot", "eve");

// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }

// addNums(9, 6);

// const addNums = (num1) => num1 + 5;

// console.log(addNums(5));

// store the value in memory of the funtion
// block the rest of the codes from running

// function addNums(num1, num2) {
//   return num1 + num2;
//   console.log(num1 + num2);
// }
// let add = addNums(3, 5);

// console.log(add);

///////////////////////////////////////////////
///js function to return the sum of an array///
///////////////////////////////////////////////
// function getArrSum(arr) {
//   arrSum = arr.reduce((a, b) => a + b);
//   return arrSum;
// }

// console.log(getArrSum([5, 9, 8, 90]));

///////////////////////////////////////////////////////
//js to return the sum of added digits of any number///
///////////////////////////////////////////////////////

// let num = prompt("enter a number").split("");

// let numArr = num.split("");

// arrSum = numArr.reduce((a, b) => Number(a) + Number(b));

// console.log(arrSum);

// const person = {
//   name: "gb",
//   email: "gb@gmail.com",
//   isAdmin: true,
// greet: () => {
//   return "good morning " + this.name;
// },
//   greet: function () {
//     return "good moring " + this.name;
//   },
// };

// console.log(person.greet());

// practice questions
// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// function revereNum(x) {
//   let arr = x.split("");
//   arr.reverse();
//   return arr.join("");
// }
///////////////////////
///////////or//////////
///////////////////////
// function revereNum(x) {
//   return x.split("").reverse().join("");
// }
// console.log(revereNum(num));

/////////////////////////////
/////////assignments/////////
/////////////////////////////
////////
///1////
////////
// Write a JavaScript function that checks whether a
// passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads
// the same backward as forward, e.g., madam or nurses run.
////////
///2////
////////
// write a function that returns the 20 percent of any number
// let num = prompt("please enter a number");

function isLeapYear(year) {
  if (year % 4 === 0 || year % 400 === 0 || year % 100 === 0) {
    return "This is a leapyear";
  } else {
    return "This is not a leapyear";
  }
}
