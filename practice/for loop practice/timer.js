// const display = document.querySelector(".display");
// const button = document.querySelector(".button");
// let watch = "0";
// function handleClick = () => {
// display++;
// console.log(display);
// console.log("handleClick",handleClick);
// }

// handleClick();
// setInterval(fun, 1000);
// function fun() {
//   var d = new Data();
//   document.querySelector(".watch").innerHTML = d.toLocaleTimeString();
// }
var num = 0;
var count = 0;
var timer = false;
function handleClick() {
  timer = true;
  stopwatch();
}
handleClick();
function stopwatch() {
  if (timer == true) {
    count = count + 1;
    document.getElementById("count").innerHTML = count;
    setTimeout("stopwatch()", 10);
  }
}
