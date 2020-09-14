// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){

 var length = prompt("What would you like the length of password to be *must be between 8 - 128");
  
 if(length >= 8 && length <= 128)
 {

  var genUpperCase = confirm("Would you like to include upper case characters?");
  var genLowerCase = confirm("Would you like to include lower case characters?");
  var genSpecialChar = confirm("Would you like to include special characters?");
  var numbers = confirm("Would you like to include numbers?");

// create arrays to hold the characters 
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase =["a", "b", "c", "d","e","f","g","h","i","j","k", "l", "m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];

var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","?"];

var numbers =[1,2,3,4,5,6,7,8,9,0];

// this array is to hold the selections that are made by the confirm prompts 
var newArray = [];
 }

 else{
  alert("Please enter a valid length");
}
 
var password = "";

//if statements that will push the selected arrays into our new array
if (genUpperCase){
  newArray.push(upperCase);
  // password += (Math.random() * upperCase[i]);
  }

  if(genLowerCase){
  newArray.push(lowerCase);  
  // password += (Math.random() * lowerCase[i]);
  }

  if(genSpecialChar){
  newArray.push(specialChar)
  // password += (Math.random() * specialChar[i]);
  }

  if(numbers){
  newArray.push(numbers)
  // password += (Math.random()* numbers[i])
  }

  console.log(newArray);

// for loop to iterate through selected length times and add a random character from the arrays that were chosen by the user.
// 2d array is used so need to go in 2 times , 1 to pull selected array and the second to select an item from the selected array
for (var i = 0; i < length; i++){

var arr = newArray[Math.floor(Math.random() * newArray.length)];
console.log(arr);

var randoChar = arr[Math.floor(Math.random() * arr.length)];
console.log(randoChar);

password += randoChar;
console.log(password);
 
}
return password;
}