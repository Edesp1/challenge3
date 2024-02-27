// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  var minLimit = 8; // Minimum length of password
  var maxLimit = 128; // max character limit of 128
  var upperCase = confirm("Do you need Uppercase letters ?") // asks user to confirm if 
  var lowerCase = confirm("Do you need Lowercase letters ?")// they need any
  var numbers = confirm("Do you need Numbers ?")//of the following 
  var specialChar = confirm("Do you need Special Characters ?") //criterias.
 

  var chars = "" //empty string stores the characters on what the user picks

  if (upperCase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //if user wants uppercase, it picks from this string
  }

  if (lowerCase){
    chars += "abcdefghijklmnopqrstuvwxyz";//if user wants lowercase, it picks from this string
  }
  if (numbers) {
    chars += "0123456789";// if user wants numbers, it picks from this string
  }

  if (specialChar) {
    chars += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";//if user wants special characters, it picks from this string
  }

  if (chars === "") { //if there is no criteria picked it displays this messsage.
    alert("Please select a criteria");
    return ("No criteria selected.");
  }
//asks user to pick a length between the two limits
  var passwordInput = prompt("Enter password length (between " + minLimit + " and " + maxLimit + "):");

  if(passwordInput == null || passwordInput.trim() == "") {
    alert("Please enter a valid number for the Password Length");
    return "no input"; //if user enters nothing then this will be displayed
  }

  var length = parseInt(passwordInput);

  if(passwordInput > maxLimit) {  //if the user enters a number higher than the max
    alert("Password length is over " + maxLimit + " !");//it displays this
    return "Over character limit";
  }

  if (length < minLimit) { //displays the same if the user picks a lower number
    alert("Please enter a value greater or no less than " + minLimit + "");
    return "Under Character limit";
  }

  for(var i = 0; i <length; i++) { //creates a random password based on the users
    var random = Math.floor(Math.random() * chars.length); //criteria choices
    password += chars[random];
   } 

  return password; // displays the password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
