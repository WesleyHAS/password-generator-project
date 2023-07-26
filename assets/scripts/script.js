// Assignment code here

function generatePassword() {
  //all characters available
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var symbolChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?'];

  //prompt to ask for password lenght
  var length = prompt("Enter the password length (between 8 and 32 characters):");

  // Validate the password length
  while (length < 8 || length > 32) {
    alert("Invalid password length. Please enter a number between 8 and 32.");
    var length = prompt("Enter the password length (between 8 and 32 characters):");
  }

  //Checks for types of characters you want to include
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumbers = confirm("Include numbers?");
  var useSymbols = confirm("Include special characters?");

  //Check if at least 1 type of character was selected
  while (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
    alert("Please select at least one type of character.");

    var useLowercase = confirm("Include lowercase characters?");
    var useUppercase = confirm("Include uppercase characters?");
    var useNumbers = confirm("Include numbers?");
    var useSymbols = confirm("Include special characters?");
  }

  //Empty array to store the characters
  var passwordChars = [];

  //Concatonate the characters into the empty array
  if (useLowercase) passwordChars = passwordChars.concat(lowercaseChars);
  if (useUppercase) passwordChars = passwordChars.concat(uppercaseChars);
  if (useNumbers) passwordChars = passwordChars.concat(numberChars);
  if (useSymbols) passwordChars = passwordChars.concat(symbolChars);

  //Randomize the password according with the lenght chosen by the user
  var password = '';
  for (var i = 0; i < length; i++) {
    var randomPassword = Math.floor(Math.random() * passwordChars.length);
    password = password + passwordChars[randomPassword];
  }

  //Returns the string of the random password generated
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
