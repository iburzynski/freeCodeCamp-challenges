function rot13(str) {

  var decoded = ''; // create an empty string to fill with the decoded characters

  for (var i = 0; i < str.length; i++) { // create a loop to decipher each character in the coded string
    
    var val = str.charCodeAt(i); // store the value of the current character

      if (val >= 65 && val < 78) { // for letters A - M...
        val+=13; // ...add 13 to the code (A -> N, B -> O, etc.)
      } else if (val >= 78 && val <= 90) { // for letters N - Z...
        val-=13; // ...subtract 13 from the code (N -> A, O -> B, etc.)
      } // non-alphabetic characters (val < 65 or > 90) are unchanged

    decoded = decoded.concat(String.fromCharCode(val)); } // add the deciphered value to the decoded string

   return decoded; // return the decoded message
}

rot13("SERR PBQR PNZC");
