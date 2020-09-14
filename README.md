# password_generator

## Description

Using javascript create a functioning random password generator. 

## Installation

Have prompts and confirms pop up to determine the length of the password as well as the types of characters that are to be used in the password. Use arrays to contain the characters that are options as well as an array to contain the characters that are the chosen ones. 

This creates a 2d array. * We did not go over this specifically in class but it was introduced to me by my tutor * Using a 2d array I could hold the entire selected array that was chosen by the user. Then  creating a new variable and using "Math.floor(Math.random)" I was able to select a random array from my array options, and then from that array a random index, which is assigned to a specific char. 

## Usage

Click the generate password options. Input the length you would like the password to be. If you chose an incorrect length you will be given an error alert. If you chose an option that is valid you will then be prompted to confirm the types of characters you would like as options for your password. By selecting "Ok" you say yes, "cancel" is no. Once your selections are made the password will be generated and appear in the text area. 

## Credits

I worked with a tutor who helped me set up my 2d array and also iterate through my for loop to generate a password. 