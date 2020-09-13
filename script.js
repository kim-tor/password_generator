// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){

 var length = prompt("What would you like the length of password to be *must be between 8 - 128");
  
 if(length >= 8 && length <= 128){

  var genUpperCase = confirm("Would you like to include upper case characters?");
  var genLowerCase = confirm("Would you like to include lower case characters?");
  var genSpecialChar = confirm("Would you like to include special characters?");
  var numbers = confirm("Would you like to include numbers?")

  
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase =["a", "b", "c", "d","e","f","g","h","i","j","k", "l", "m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];

var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","?"];

var numbers =[ 1,2,3,4,5,6,7,8,9,0];

 
// How do I initiate a for loop to iterate through the length that was input by the use and create
// a password of the right length?
var passArray = new Array (length);

for (var i = 0; i < passArray.length; i++){
// Trying to figure out how to get it to randomly choose from the categories that the user selected
  if (upperCase){
  password += (Math.random() * upperCase[i]);
  }

  if(lowerCase){
  password += (Math.random() * lowerCase[i]);
  }

  if(specialChar){
  password += (Math.random() * specialChar[i]);
  }

  if(numbers){
  password += (Math.random()* numbers[i])
  }
  } 
  return (password);

  // The output I get makes no sense to me. It
 }
 else{
   alert("Please enter a valid length");
 }
}