function mutation(arr) {

  var i = 0; // set the index position (character) within the second string to 0

  while (i < arr[1].length) { // loop for each character in the second string
    if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) == -1) { // test if the current character *doesn't* exist in the first string, ignoring case sensitivity by setting both strings to lowercase
      return false; // if so, end the process. String 2 contains a character not found in String 1
    }
    i++; // otherwise, increase the index position and search for the next character
  } return true; // if the loop runs to completion, every character in String 2 occurs in String 1
}

mutation(["Hello", "Hey"]);
