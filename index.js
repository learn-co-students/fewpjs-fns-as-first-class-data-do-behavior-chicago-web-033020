/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeStr) {
  // converts string to int
  // takes in numstring && sets the system
  const hour = parseInt(timeStr, 10);
  if (hour < 12) {
    return "Good Morning"
  }
  else if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  }
  else if (hour > 17) {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.querySelector("#greeting").innerText = string;
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
