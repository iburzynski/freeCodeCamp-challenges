function destroyer(arr) {

  var args = Array.from(arguments); /* put the arguments in an array so we can use them in a filter subfunction 
  Note: Index 0 contains the original array; the hitlist begins at Index 1 */
  var survivors = arr.filter(function(arrVal) {
    for (var i = 1; i < args.length; i++) { // for each value in the hitlist...
      if (arrVal == args[i]) {
        return false; // ...omit it from survivors if it matches the array value
      }
    }
    return true; // otherwise keep it
  });
  return survivors;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
