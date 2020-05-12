/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let time = parseInt(`${string[0]}${string[1]}${string[3]}${4}`, 10)
  if (time < 1200){
    return 'Good Morning'
  } else if (time >= 1200 && time <= 1700) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  document.getElementById('greeting').innerText = string
}

//The `displayMessage` function should take one argument, a `String`.

// When the function runs it should update the text inside the `#greeting` node
// with the content of the argument.

// It does not return anything.
