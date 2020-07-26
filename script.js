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

// variables to help keep track of what user wants in their finalPassword
var numberBool = false;
var upperBool = false;
var lowerBool = false;
var specialCharsBool = false;

// variable to store how long the user wants their finalPassword to be
var initialPWLength = 0;

//variable for minimum finalPassword length and inital finalPassword string
var shortestPW = 8;
var initialPW = "";

//  console logs to see that the arrays are properly created
console.log(arrayLower);
console.log(arrayUpper);
console.log(arraySpecialChars);
console.log(arrayNumbers);

//this function confirms what kinds of characters user wants in their finalPassword 
function confirmChars(){
  initialPWLength = prompt("Enter the length of your finalPassword");
  while (initialPWLength < shortestPW) {
    alert("Length of finalPassword has to be greater than 6");
    initialPWLength = prompt("Enter the length of your finalPassword");
  } 

  numberBool = confirm("Do you want numbers in your finalPassword?");
  upperBool = confirm("Do you want uppercase letters?");
  lowerBool = confirm("Do you want lowercase letters?");
  specialCharsBool = confirm("Do you want special characters?");
}

//this function takes the characters and length the user wants and adds random characters from selected categories (i.e. numbers, special characters, etc) and adds them to finalPassword string
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

//this function takes the portion of the finalPassword that has already been created, finishes it to make it the required length, then randomizes the order of the characters
function generatePassword() {
  var charactersRemaining = initialPWLength - initialPW.length;
  var allConfirmedCharacters = "";

  // you could call confirm function here

  // after implementing the required chars, create a string candidates of strings for random selections
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
    initialPW += allConfirmedCharacters[randomCharsSelectorIndex]; // append to the existing finalPassword
  }
  console.log('Password before randomized order', initialPW);

  // Randomize the order of chars in the finalPassword - can be skipped or add your own code
  var passwordArray = initialPW.split("");
  var randomizeArray = [];
  randomizeArray.push(passwordArray[passwordArray.length - 1]);
  randomizeArray.push(passwordArray[passwordArray.length - 2]);
  for (var i = 0; i < (passwordArray.length - 2); i++) {
    randomizeArray.push(passwordArray[i]);
  };
  initialPW = randomizeArray.join("");


  console.log("Final finalPassword", initialPW);
  return initialPW;
}

// Write finalPassword to the #finalPassword input
function writePassword() {
  // could call your functions here below
  confirmChars();
  addConfirmedChars();


  var finalPassword = generatePassword();
  var finalPasswordText = document.querySelector("#finalPassword");

  finalPasswordText.value = finalPassword;

}

// Add event listener to generate button
pwGeneratorBtn.addEventListener("click", writePassword);