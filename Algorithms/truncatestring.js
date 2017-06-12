function truncateString(str, num) {

  if (num < str.length) { // if the max string length is less than the original string length
    if (num > 3) { // AND the max length is greater than 3...
      num = num - 3; // ...reduce the max length by 3 because the elipsis will be included in the final character count
    }
    str = str.slice(0, num) + "..."; // replace the string with a slice beginning at the first character and ending at the current max length, then add an elipsis
  }

  return str; // return the string. if the max length is greater or equal to the original string length, the string will be returned unaltered
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
