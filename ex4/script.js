// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById('myButton')
var element1 = document.getElementsByClassName('box')

button.addEventListener('click', function () {
  for (let i = 0; i < element1.length; i++) {
    element1[i].style.backgroundColor = 'blue'
  }
  // element1[0].style.backgroundColor = 'blue'
  // element1[1].style.backgroundColor = 'blue'
  // element1[2].style.backgroundColor = 'blue'
})
