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
var min = 0;
var hr = 0;
// var sec = 0;
var sec = 0;
var timer = false;
function handleClickStart() {
  timer = true;
  stopwatch();
}
handleClickStart();
function handleClickStop() {
  timer = false;
  stopwatch();
}
handleClickStop();
function handleClickReset() {
  timer = false;
  if (timer == false) {
    sec = 0;
    hr = 0;
    // sec = 0;
    min = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    // document.getElementById("sec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
  }
  handleClickReset();
}
function stopwatch() {
  if (timer == true) {
    sec = sec + 1;
    // if (sec == 100) {
    //   sec = sec + 1;
    //   sec = 0;
    // }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
    }
    var hrString = hr;
    var minString = min;
    // var secString = sec;
    var secString = sec;
    if (hr < 10) {
      hrString = "0" + hr;
    }
    if (min < 10) {
      minString = "0" + min;
    }
    if (secString < 10) {
      secString = "0" + sec;
    }
    // if (sec < 10) {
    //   secString = "0" + sec;
    // }
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    // document.getElementById("sec").innerHTML = secString;
    document.getElementById("sec").innerHTML = secString;
    setTimeout("stopwatch()", 1000);
  }
}
stopwatch(handleClick);
