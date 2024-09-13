//Find the two value use in function ?
// function sum() {
//   var a = 10;
//   var b = 20;
//   var totalSum = a + b;
//   console.log(totalSum);
// }
// sum();

//second type pass the function parameter and function argument

// function sum(a, b) {
//   var totalSum = a + b;
//   console.log(totalSum);
// }
// sum(12, 13);

// third type pass the function expression
function sum(a, b) {
  var totalSum = a + b;
  console.log(totalSum);
}
var funEx = sum(10, 20);
funEx();
