// 1. Change variable names to your own
// 2. Change the groups of code into functions and call/execute them at the right places
// 3. Modify or remove the comments

// variable to connect to the button in the HTML code
var pwGeneratorBtn = document.querySelector("#generate");

// these variables contain the strings of all characters that can be used
var stringLower = "abcdefghijklmnopqrstuvwxyz";
var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringSpecialChars = "$#@!~^&*()_+[]{}%':;?<>=-.,"; // added some other special characters (%':;?<>=-.,) 
var stringNumbers = "0123456789";

// these variables take the strings of all characters needed and convert them to arrays
var arrayLower = stringLower.split("");
var arrayUpper = stringUpper.split("");
var arraySpecialChars = stringSpecialChars.split(""); // could need modification
var arrayNumbers = stringNumbers.split("");

// variables to help keep track of what user wants in their password
var numberBool = false;
var upperBool = false;
var lowerBool = false;
var specialCharsBool = false;

// variable to store how long the user wants their password to be
var initialPWLength = 0;

//variable for minimum password length and inital password string
var shortestPW = 8;
var initialPW = "";

//  console logs to see that the arrays are properly created
console.log(arrayLower);
console.log(arrayUpper);
console.log(arraySpecialChars);
console.log(arrayNumbers);

//this function confirms what kinds of characters user wants in their password 
function confirmChars(){
  initialPWLength = prompt("Enter the length of your password");
  while (initialPWLength < shortestPW) {
    alert("Length of password has to be greater than 6");
    initialPWLength = prompt("Enter the length of your password");
  } 

  numberBool = confirm("Do you want numbers in your password?");
  upperBool = confirm("Do you want uppercase letters?");
  lowerBool = confirm("Do you want lowercase letters?");
  specialCharsBool = confirm("Do you want special characters?");
}

//this function takes the characters and length the user wants and adds random characters from selected categories (i.e. numbers, special characters, etc) and adds them to password string
function addConfirmedChars(){
  if (numberBool) {
    var index = Math.floor(Math.random() * arrayNumbers.length);
    initialPW += arrayNumbers[index];
  }
  console.log(initialPW);

  if (upperBool) {
    var index = Math.floor(Math.random() * arrayUpper.length);
    initialPW += arrayUpper[index];
  }
  console.log(initialPW);

  if (lowerBool) {
    var index = Math.floor(Math.random() * arrayLower.length);
    initialPW += arrayLower[index];
  }
  console.log(initialPW);

  if (specialCharsBool) {
    var index = Math.floor(Math.random() * arraySpecialChars.length);
    initialPW += arraySpecialChars[index];
  }
  console.log(initialPW);
}

// Function: 
function generatePassword() {
  var remaining = initialPWLength - initialPW.length;
  var allChosenStr = "";

  // you could call confirm function here

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

  for (var i = 0; i < remaining; i++) {
    var index = Math.floor(Math.random() * allChosenStr.length);
    initialPW += allChosenStr[index]; // append to the existing password
  }
  console.log('Password before randomized order', initialPW);

  // Randomize the order of chars in the password - can be skipped or add your own code
  var pwdArr = initialPW.split("");
  var randomOrdered = [];
  randomOrdered.push(pwdArr[pwdArr.length - 1]);
  randomOrdered.push(pwdArr[pwdArr.length - 2]);
  for (var i = 0; i < (pwdArr.length - 2); i++) {
    randomOrdered.push(pwdArr[i]);
  };
  initialPW = randomOrdered.join("");


  console.log("Final password", initialPW);
  return initialPW;
}

// Write password to the #password input
function writePassword() {
  // could call your functions here below
  confirmChars();
  addConfirmedChars();


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
pwGeneratorBtn.addEventListener("click", writePassword);