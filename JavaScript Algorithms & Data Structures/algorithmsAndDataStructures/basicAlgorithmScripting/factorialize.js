function factorialize(num) {
  var answer = 1;
for (var i = 1; i <= num; i++) {
answer *= i;
}

  return answer;
}

factorialize(5);


// 2nd Solution using while loop;


function factorialize(num) {
  var answer = 1;
  while (num > 1){
  answer *= num;
  num--;
  }
  return answer;

}

factorialize(5);