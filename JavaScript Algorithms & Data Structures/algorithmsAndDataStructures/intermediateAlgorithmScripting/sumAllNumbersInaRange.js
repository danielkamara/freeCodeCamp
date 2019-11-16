// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.




function sumAll(arr) {
  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  var total = 0;

  for (var i = start; i <= end; i++) {
    total += i;
  }
    
return total;

  }
  
  sumAll([4, 1]);