//Write a program that works out whether if a given year is a leap year or not?
// var year = prompt("enter the number");
// if (year % 4 == 0) {
//   console.log("year is leap year");
// } else {
//   console.log("year is not leap year");
// }
//What is the truthy and falsy value in javascript ?
//We have total 5 falsy value in javascript
// 0,"",undefined,null,Nan false** is false anyway
if ((score = 0)) {
  console.log("Yay,We won the game");
} else {
  console.log("OMG,WE loss the game");
}
//output=OMG,We loss the game
//Find the area of circle,triangle, and rectangle?
var area = "circle";
var PI = 3.14,
  l = 3,
  b = 4,
  r = 3;
if (area == "circle") {
  console.log("the area of the circle is =", PI * r ** 2);
} else if (area == "triangle") {
  console.log("the area is triangle =", (l * b) / 2);
} else if (area == "rectangle") {
  console.log("the area of the circle is=", l * b);
} else {
  console.log("please enter the correct option");
}
