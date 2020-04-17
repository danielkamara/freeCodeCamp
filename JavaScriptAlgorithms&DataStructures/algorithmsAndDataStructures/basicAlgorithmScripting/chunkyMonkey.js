// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.



function chunkArrayInGroups(arr, size) {
  // Break it up.
  var holderArray = [];
  var count = 0;

  while (count < arr.length) {
   holderArray.push(arr.slice(count, count = count + size));
  }
  return holderArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);