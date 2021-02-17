// Creating an event where if cicked with ID 'addItem' then the following function will occur
document.getElementById('addItem').addEventListener('click', event => {
  //Prevent reset of webpage upon execution of function
  event.preventDefault()
  // Creating a new list
  let itemElem = document.createElement('li')
  // Assigning itemElem the class of 'list-group-item'
  itemElem.className = 'list-group-item'
  // Giving the new value of text.value into itemElem
  itemElem.textContent = document.getElementById('text').value
  // Adding item value to the unordered list
  document.getElementById('items').append(itemElem)
  // clearing the input form
  document.getElementById('text').value = ''
})
// Looking for the click in order to begin the following event
document.addEventListener('click', event => {
  // Only items that include class 'list-group-item' then lines 20-23 will activate
  if (event.target.classList.contains('list-group-item')) {
    // Only item that include class 'activate' then line 21-23 will activate
    if (event.target.classList.contains('active')) {
      // Removes active class
      event.target.classList.remove('active')
      // If the if statements above are not satisfied, then the following will occur
    } else {
      // Adds active class
      event.target.classList.add('active')
    }
  }
})
