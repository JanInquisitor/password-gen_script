"use strict";
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = "abcdefghijklmnopqrstwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
var numbers = "123456789";
var specialChars = "~!@#$%^&*,-.:;()_+{}[]<=>";

function generatePassword(properties) {
  // create empty string
  var newPassword = "";

  // in case no options are selected for special characters or numbers then creates a only letters password
  if (!properties.numbers && !properties.specialChars) {
    for (var i = 0; i < properties.length; i++) {
      var randInt = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randInt);
    }
  } else if (properties.specialChars === true) {
    var newSet = characters + specialChars;

    for (var i = 0; i < properties.length; i++) {
      var randInt = Math.floor(Math.random() * newSet.length);
      newPassword += newSet.charAt(randInt);
    }
  } else if (properties.numbers === true) {
    var newSet = characters + numbers;

    for (var i = 0; i < properties.length; i++) {
      var randInt = Math.floor(Math.random() * newSet.length);

      newPassword += newSet.charAt(randInt);
    }
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

  // This stops the program if there's not length or the length is either to short or to long
  if (properties.length === null) return false;

  properties.length = parseInt(properties.length, 10);

  console.log(typeof "whatever");

  if (typeof properties.length === 0 || typeof properties.length === "string") {
    alert("Must enter a number");
    return false;
  }

  if (properties.length < 8 || properties.length > 128) return false;

  properties.upperCase = confirm(
    "Woukd you like the password to contain uppercase characters?"
  );

  properties.specialChars = confirm(
    "Would you like the password to contain special characters?"
  );

  properties.numbers = confirm(
    "Would you like the password to contain numbers?"
  );

  return properties;
}

// Write password to the #password input
function writePassword() {
  var properties = getProperties();
  var password = generatePassword(properties);
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}
