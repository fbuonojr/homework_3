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
    var numberIndex = Math.floor(Math.random() * arrayNumbers.length);
    initialPW += arrayNumbers[numberIndex];
  }
  console.log(initialPW);

  if (upperBool) {
    var upperIndex = Math.floor(Math.random() * arrayUpper.length);
    initialPW += arrayUpper[upperIndex];
  }
  console.log(initialPW);

  if (lowerBool) {
    var lowerIndex = Math.floor(Math.random() * arrayLower.length);
    initialPW += arrayLower[lowerIndex];
  }
  console.log(initialPW);

  if (specialCharsBool) {
    var specialCharsIndex = Math.floor(Math.random() * arraySpecialChars.length);
    initialPW += arraySpecialChars[specialCharsIndex];
  }
  console.log(initialPW);
}

//this function takes the portion of the password that has already been created, finishes it to make it the required length, then randomizes the order of the characters
function generatePassword() {
  var charactersRemaining = initialPWLength - initialPW.length;
  var allConfirmedCharacters = "";

  if (numberBool) {
    allConfirmedCharacters += stringNumbers;
  }
  if (upperBool) {
    allConfirmedCharacters += stringUpper;
  }
  if (lowerBool) {
    allConfirmedCharacters += stringLower;
  }
  if (specialCharsBool) {
    allConfirmedCharacters += stringSpecialChars;
  }
  console.log(allConfirmedCharacters);

  for (var i = 0; i < charactersRemaining; i++) {
    var randomCharsSelectorIndex = Math.floor(Math.random() * allConfirmedCharacters.length);
    initialPW += allConfirmedCharacters[randomCharsSelectorIndex]; 
  }
  console.log('Password before randomized order', initialPW);

  var passwordArray = initialPW.split("");
  var randomizeArray = [];
  randomizeArray.push(passwordArray[passwordArray.length - 1]);
  randomizeArray.push(passwordArray[passwordArray.length - 2]);
  for (var i = 0; i < (passwordArray.length - 2); i++) {
    randomizeArray.push(passwordArray[i]);
  };
  initialPW = randomizeArray.join("");


  console.log("Final password", initialPW);
  return initialPW;
}

//this is the function that is called when the generate button is clicked and begins the process
function writePassword() {
  confirmChars();
  addConfirmedChars();

  var finalPassword = generatePassword();
  var finalPasswordText = document.querySelector("#password");

  finalPasswordText.value = finalPassword;

}

//event listener for when generate button is clicked
pwGeneratorBtn.addEventListener("click", writePassword);