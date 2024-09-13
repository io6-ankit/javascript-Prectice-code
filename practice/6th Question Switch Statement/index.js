//Find the area of circle,triangle,rectangle?
var area = "circle";
var PI = 3.14,
  l = 5,
  b = 3,
  r = 3;
switch (area) {
  case "circle":
    console.log("The area of the circle is:", PI * r ** 2);
  case "triangle":
    console.log("The area of triangle is:", (l * b) / 2);
  case "rectangle":
    console.log("The area of rectangle is :", l * b);
  default:
    console.log("Please enter the correct value");
}
