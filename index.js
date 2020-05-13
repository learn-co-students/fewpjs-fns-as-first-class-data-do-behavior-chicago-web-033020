/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

// si = HH:MM

function greet(si){
  let hourString = si.split(':')
  let hourNum = parseInt(hourString[0])

  if (hourNum < 12){
    return 'Good Morning'
  } else if (hourNum > 17){
    return 'Good Evening'
  } else {
    return 'Good Afternoon'
  }
}

function displayMessage(msg){
  document.getElementById('greeting').innerText = msg;
}