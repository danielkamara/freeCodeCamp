// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.


function findLongestWordLength(str) {
  var longestWord = 0;
 str = str.split(' ');
 for (var i = 0; i < str.length; i++) {
   if (str[i].length > longestWord )  {
     longestWord = str[i].length;
   }
 }
 return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
