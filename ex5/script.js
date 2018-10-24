// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

var button = document.getElementById('myButton')
var boxContainer = document.getElementById('boxContainer')
// var element1 = document.getElementsByClassName('box');

button.addEventListener('click', function () {
  var newDiv = document.createElement('div')
  newDiv.classList.add('box')
  boxContainer.appendChild(newDiv)
})
