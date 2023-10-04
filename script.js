//character bank variables
var number = "0123456789";
var special = "~!@#$%^&*()_+[]{}|;':<>?,./";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(getPasswordLength());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get the total requested length of the password
function getPasswordLength() {
  let characterTotal = window.prompt("Please enter a number between 8 and 128 characters.");

  while (isNaN(characterTotal) || characterTotal < 8 || characterTotal > 128) {
    characterTotal = window.prompt("Please enter a number between 8 and 128 characters.");
  }

  return characterTotal;
}

//generate password function
function generatePassword(characterTotal) {
  let passwordRequirements = "";
  let passwordArray = [];

  //user prompts
  if (window.confirm("Would you like to include numbers in your password?")) {
    passwordRequirements += number;
    passwordArray.push(getRandomCharacter(number));
  }

  if (window.confirm("Would you like to include special characters in your password?")) {
    passwordRequirements += special;
    passwordArray.push(getRandomCharacter(special));
  }

  if (window.confirm("Would you like to include uppercase letters in your password?")) {
    passwordRequirements += uppercase;
    passwordArray.push(getRandomCharacter(uppercase));
  }

  if (window.confirm("Would you like to include lowercase letters in your password?")) {
    passwordRequirements += lowercase;
    passwordArray.push(getRandomCharacter(lowercase));
  }
//returns to the function beginning if they didnt select any character types
  if (passwordArray.length === 0) {
    alert("Please select at least one type of character.");
    return generatePassword(characterTotal);
  }
//adds characters until the length equals the requested password length
  while (passwordArray.length < characterTotal) {
    passwordArray.push(getRandomCharacter(passwordRequirements));
  }

  return passwordArray.join("");
}

//random character grabber
function getRandomCharacter(characterSet) {
  let character = characterSet[Math.floor(Math.random() * characterSet.length)];
  return character;
}