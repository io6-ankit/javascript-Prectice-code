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
let num = 0;
let count = 0;
let timer = false;
function handleClick() {
  timer = true;
  stopwatch();
}
handleClick();
function handleClickStop() {
  timer = false;
  stopwatch();
}
handleClickStop();
function handleClickReset() {
  timer = false;
  if (timer == false) {
    count = 0;
    document.getElementById("count").innerHTML = count;
  }
  handleClickReset();
}
function stopwatch() {
  if (timer == true) {
    count = count + 1;
    document.getElementById("count").innerHTML = count;
    setTimeout("stopwatch()", 100);
  }
}
stopwatch(handleClick);
