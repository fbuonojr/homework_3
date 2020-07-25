// Assignment Code
var pwGeneratorBtn = document.querySelector("#generate");
​
// 1. Change variable names to your own
// 2. Change the groups of code into functions and call/execute them at the right places
// 3. Modify or remove the comments
​
// ***********
// DATA
// ***********
​
// change the all varialbe names, comments, etc.
var stringLower = "abcdefghijklmnopqrstuvwxyz";
var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringSpecialChars = "$#@!~^&*()_+[]{}"; // might need more 
var stringNumbers = "0123456789";
​
// you could change varialbes into hard coded arrays such as ['a', 'b', ... ]
var arrayLower = "abcdefghijklmnopqrstuvwxyz".split("");
var arrayUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var arraySpecialChars = "$#@!~^&*()_+[]{}".split(""); // could need modification
var arrayNumbers = "0123456789".split("");
​
// variables for store user's input
var numberBool = false;
var upperBool = false;
var lowerBool = false;
var specialCharsBool = false;
var userPWLength = 0;
​
var minLen = 8;
var _password = "";
​
// log to see the data
console.log(arrayLower);
console.log(arrayUpper);
console.log(arraySpecialChars);
console.log(arrayNumbers);
​
// **************************
// USER INPUT - function ()?
// **************************
​
userPWLength = prompt("Enter the length of your password");
while (userPWLength < minLen) {
  alert("Length of password has to be greater than 6");
  userPWLength = prompt("Enter the length of your password");
} 
​
numberBool = confirm("Do you want numbers in your password?");
upperBool = confirm("Do you want uppercase letters?");
lowerBool = confirm("Do you want lowercase letters?");
specialCharsBool = confirm("Do you want special characters?");
​
// ***********
// MAIN LOGIC
// ***********
​
// you can make the following code into function () and call it at the appropriate place
// function() ? and/or 
// another function to handle random index and to add the char to an array 
// with the array passed as input argument
​
// Include in password at least one letter with the user's choices of numbers, special chars, uppercase and/or lowercase chars
// to meet user's requiremence
if (numberBool) {
  var index = Math.floor(Math.random() * arrayNumbers.length);
  _password += arrayNumbers[index];
}
console.log(_password);
​
if (upperBool) {
  var index = Math.floor(Math.random() * arrayUpper.length);
  _password += arrayUpper[index];
}
console.log(_password);
​
if (lowerBool) {
  var index = Math.floor(Math.random() * arrayLower.length);
  _password += arrayLower[index];
}
console.log(_password);
​
if (specialCharsBool) {
  var index = Math.floor(Math.random() * arraySpecialChars.length);
  _password += arraySpecialChars[index];
}
console.log(_password);
​
// Function: 
function generatePassword() {
  var remaining = userPWLength - _password.length;
  var allChosenStr = "";
​
  // you could call confirm function here
​
  // after implementing the required chars, create a string candidates of strings for random selections
  if (numberBool) {
    allChosenStr += stringNumbers;
  }
  if (upperBool) {
    allChosenStr += stringUpper;
  }
  if (lowerBool) {
    allChosenStr += stringLower;
  }
  if (specialCharsBool) {
    allChosenStr += stringSpecialChars;
  }
  console.log(allChosenStr);
​
  for (var i = 0; i < remaining; i++) {
    var index = Math.floor(Math.random() * allChosenStr.length);
    _password += allChosenStr[index]; // append to the existing password
  }
  console.log('Password before randomized order', _password);
​
  // Randomize the order of chars in the password - can be skipped or add your own code
  var pwdArr = _password.split("");
  var randomOrdered = [];
  randomOrdered.push(pwdArr[pwdArr.length - 1]);
  randomOrdered.push(pwdArr[pwdArr.length - 2]);
  for (var i = 0; i < (pwdArr.length - 2); i++) {
    randomOrdered.push(pwdArr[i]);
  };
  _password = randomOrdered.join("");
​
​
  console.log("Final password", _password);
  return _password;
}
​
// Write password to the #password input
function writePassword() {
  // could call your functions here below
​
​
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
​
  passwordText.value = password;
​
}
​
// Add event listener to generate button
pwGeneratorBtn.addEventListener("click", writePassword);