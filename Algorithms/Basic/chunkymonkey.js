
function chunkArrayInGroups(arr, size) {
  var arrChunky = []; // create an empty array so we can add our chunks
  var begin = 0; // set initial slice begin point to 0

  while (begin < arr.length) { // run loop until the initial slice point falls outside the array
    var chunk = arr.slice(begin, begin + size ); // endpoint = initial slice point + chunk size
    arrChunky.push(chunk); // add the sliced chunk to the chunky array
    begin += size; // shift the initial slice point to slice anotha' one
  }
  return arrChunky; // a very chunky array :D
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)
