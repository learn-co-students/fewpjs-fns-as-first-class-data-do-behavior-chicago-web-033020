/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);



function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

// function time() {
//   hourString = timeString.split(0, 2)
//   hour = parseInt(hourString)
//   return
// }

function greet(timeString) {
  const hourString = timeString.split(0, 2)
  const hour = parseInt(hourString)
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  };
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}