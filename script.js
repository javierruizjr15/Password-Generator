// set up var

// first click Generate btn, then prompt series of questions:
// first question: how many char 8><128 
// next question: do u want lowercase
// next ?: do u want uppercase:
// nxt ?: numeric
// nxt ?: special char
// 

var charlengthR;
// // = document.getElementById("charlengthR").value
// var lwrcaseR = document.getElementById("lwrcase").confirm
// var uprcaseR = document.getElementById("uprcase").confirm
// var numcaseR = document.getElementById("numcase").confirm
// var specialcaseR = document.getElementById("specialcase").confirm


var charlength;
var lwrcase = 'abcdefghijklmnopqrstuvwxyz';
var uprcase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numcase = '1234567890';
var specialcase = '!@#$%^&*()';
var gpassSet = "";

var genreatedpass;
document.getElementById('generate').addEventListener('click', generatepassword = () => {


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

  let genreatedpass = '';

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

  for (let i = 0; i < charlengthR; i++) {
    genreatedpass += gpassSet[Math.floor(Math.random() * gpassSet.length)]
  }
  console.log("Test pass", genreatedpass);
  document.getElementById("password").textContent = genreatedpass


})
