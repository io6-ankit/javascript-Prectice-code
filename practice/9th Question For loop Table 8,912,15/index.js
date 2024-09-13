//Print the table 8,9,12,15 with using for loop?
// var a = 8;
// var b = 9;
// var c = 12;
// var d = 15;
// for (a = 8; a <= 80; a = a + 8) {
//   console.log(a);
// }
// for (b = 9; b <= 90; b = b + 9) {
//   console.log(b);
// }
// for (c = 12; c <= 120; c = c + 12) {
//   console.log(c);
// }
// for (d = 15; d <= 150; d = d + 15) {
//   console.log(d);
// }
var x = 1;
var tableOf1 = 8;
var tableOf2 = 9;
var tableOf3 = 12;
var tableOf4 = 15;
for (x = 1; x <= 10; x++) {
  console.log(
    tableOf1,
    tableOf2,
    tableOf3,
    tableOf4,
    "*",
    x,
    "=",
    tableOf1 * x,
    tableOf2 * x,
    tableOf3 * x,
    tableOf4 * x
  );
}
