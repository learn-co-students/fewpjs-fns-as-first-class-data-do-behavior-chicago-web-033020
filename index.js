/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let timeStringArr = timeString.split(':');
  let timeStringArrOne = parseInt(timeStringArr[0]);

  if(timeStringArrOne < 12) {
    return timeString = 'Good Morning'
  } else if(timeStringArrOne >= 12 && timeStringArrOne <= 17) {
    return timeString = 'Good Afternoon'
  } else if (timeStringArrOne > 17) {
    return timeString = 'Good Evening'
  } else {
    // nothing
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let content = message;
  document.getElementById('greeting').innerText = content;
}