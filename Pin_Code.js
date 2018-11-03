/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN (pinCode) {
  
  if(pinCode.length === 4) {
  var result4 = /[0-9]{4}/.test(pinCode);
    return result4;
  } else if(pinCode.length === 6) {
   var result6 = /[0-9]{6}/.test(pinCode);
    return result6;
  } else {
    return false;
  }
  
}
