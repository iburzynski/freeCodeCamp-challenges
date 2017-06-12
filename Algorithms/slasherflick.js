function slasher(arr, howMany) {
  arr.splice(0, howMany); // The splice method modifies the original array and returns a new array containing the 'severed head'. We don't want the head, so don't return: just run the method
  return arr; // Then we return the modified array ('headless body')
}
