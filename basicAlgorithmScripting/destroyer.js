function destroyer(arr) {

   var newArr = [];
   var queries = [];

   for (var i = 1; i < arguments.length; i++) {
     queries.push(arguments[i]);
   }

   arr.forEach(function(num) {
     if (queries.indexOf(num) < 0 ) {
       newArr.push(num);
     }
   });

   return newArr;


}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
