const validatePassword = require('./passwordvalidation'); //import the function
//recusive function that continues to prompt user for input unless
//":q" is entered 
function testUserPswrd() {
var psword = prompt("Enter a password to validate (or :q to quit)"); 
if  (psword==":q") {
    console.log("Ok! Goodbye!")
    return; 
}
else {
    var validpsword = Boolean(validatePassword(psword))
    if (validpsword===false) {
        console.log("Password is invalid: "+psword); 
        testUserPswrd()
    }
else { 
    console.log("Password is valid: "+psword);
        testUserPswrd()
       }
    }
}
