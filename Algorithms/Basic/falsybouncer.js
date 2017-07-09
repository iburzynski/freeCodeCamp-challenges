function bouncer(arr) {
  var noFalsies = arr.filter(function(id) { // create a new array and use the filter method so we can populate it with select items from the original array
     return Boolean(id) === true; // return all items that give non-false values when they are treated as Booleans
       });

  return noFalsies; // Return the new array containing no falsies
}

bouncer([7, "ate", "", false, 9]);
