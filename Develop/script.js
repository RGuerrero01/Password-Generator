// Assignment code here
function generate(){

var length = document.getElementById("myRange").value;


var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

var password = "";


for (var i = 0; i <= length; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

{
document.getElementById("viewerPoint").value = password;



}


document.getElementById("range").innerHTML = "Length: 8";


document.getElementById("myRange").oninput = function () {

  if (document.getElementById("myRange").value > 0) {
    document.getElementById("range").innerHTML = "Length: " + document.getElementById("myRange").value;
  }
  else {
    document.getElementById("range").innerHTML = "Length: 1";
  }

}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
