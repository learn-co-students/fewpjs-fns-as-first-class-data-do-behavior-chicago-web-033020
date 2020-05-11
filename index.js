/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
  let timeS = timeStr.split(":");
  if (parseInt(timeS[0]) < 12) {
    return "Good Morning";
  } else if (parseInt(timeS[0]) < 17)  {
    return "Good Afternoon"
  } else if (parseInt(timeS[0]) == 17 && parseInt(timeS[1]) == 0) {
    return "Good Afternoon"  
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(greeting) {
  let greet = document.querySelector('#greeting');
  greet.innerText = `${greeting}`;

}

