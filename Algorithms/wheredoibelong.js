function getIndexToIns(arr, num) {

  arr.sort(function (a,b){
    return a - b;
  }); // sort the array from lowest to highest
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) { // if the number is less than or equal to the value at the current index in the array...
     return i; // ...abort the loop and return the current index value
    }
  }
  return i; // otherwise return the final index value (this equals arr.length)

}
getIndexToIns([2, 5, 10], 15);
