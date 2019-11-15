// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  // Same, same; but different.
  return newArr.filter(function(value, index, array) {
    if (array.slice(index + 1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1) {
      return value;
    }
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);