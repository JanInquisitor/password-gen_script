"use strict";
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = "abcdefghijklmnopqrstwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
var numbers = "0123456789";
var specialChars = "~!@#$%^&*,-.:;()_+{}[]<=>";

function generatePassword(properties) {
  // create empty string
  var newSet = characters;
  var newPassword = "";

  // in case no options are selected for special characters or numbers then creates a only letters password
  if (properties.upperCase === true) newSet += upperCase;
  if (properties.specialChars === true) newSet = newSet + specialChars;
  if (properties.numbers === true) newSet = newSet + numbers;

  for (var i = 0; i < properties.length; i++) {
    var randInt = Math.floor(Math.random() * newSet.length);

    newPassword += newSet.charAt(randInt);
  }

  return newPassword;
}

function getProperties() {
  // Creates an object with all the properties.
  var properties = {};

  // Asks the user for input
  properties.length = prompt(
    "Pleaser enter the length of your password (between 8 to 128 characters)"
  );

  // This stops the program if the user click 'cancel'.
  if (properties.length === null) return false;

  properties.length = properties.length * 1;

  if (typeof properties.length === "string" || properties.length === NaN) {
    alert("Must enter a number");
    return false;
  }

  if (properties.length < 8 || properties.length > 128) {
    alert("The length is too short or too long (8-128)");
    return false;
  }

  properties.upperCase = confirm(
    "Woukd you like the password to contain uppercase characters?"
  );

  properties.specialChars = confirm(
    "Would you like the password to contain special characters?"
  );

  properties.numbers = confirm(
    "Would you like the password to contain numbers?"
  );
  console.log(properties);
  return properties;
}

// Write password to the #password input
function writePassword() {
  var properties = getProperties();
  var password = generatePassword(properties);
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}
