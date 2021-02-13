// set up var

// first click Generate btn, then prompt series of questions:
// first question: how many char 8><128 
// next question: do u want lowercase
// next ?: do u want uppercase:
// nxt ?: numeric
// nxt ?: special char


var charlengthR;
// here is where the selected length will go
var charlength;
// Here is the options that will be able to go into CharlengthR
var lwrcase = 'abcdefghijklmnopqrstuvwxyz';
var uprcase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numcase = '1234567890';
var specialcase = '!@#$%^&*()';
// here is where the pool of selected criteria will go
var gpassSet = "";
// this will start the prompt events
var genreatedpass;
document.getElementById('generate').addEventListener('click', generatepassword = () => {

// these prompts will deteremine if the var is truthy or falsy so it can go into the pool bank of gpassset
  charlengthR = prompt('Input length of password between 8-128 characters');
  console.log('charlength', charlengthR);

  lwrcaseR = confirm('Do you want the passsword to contain lowercase?');
  console.log('lowercase', lwrcaseR);

  uprcaseR = confirm('Do you want the password to contain uppercase?');
  console.log('uppercase', uprcaseR);

  numcaseR = confirm('Do you want the password to contain numbers?');
  console.log('numbers', numcaseR);

  specialcaseR = confirm('Do you want the password to contain spcecial characters?');
  console.log('special char', specialcaseR);
// this is where the generated password will apear
  let genreatedpass = '';
// if statements that read truthy falsy results based on the comfirmation value
  if (lwrcaseR) {
    gpassSet += lwrcase
  }
  if (uprcaseR) {
    gpassSet += uprcase
  }
  if (numcaseR) {
    gpassSet += numcase
  }
  if (specialcaseR) {
    gpassSet += specialcase
  }
  console.log("test set", gpassSet);
// for loop that randomly pulls characters from the gpassset, this will loop at the length detemined my carlengthR.value
  for (let i = 0; i < charlengthR; i++) {
    genreatedpass += gpassSet[Math.floor(Math.random() * gpassSet.length)]
  }
  console.log("Test pass", genreatedpass);
  document.getElementById("password").textContent = genreatedpass


})
