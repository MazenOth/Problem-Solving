// https://codeforces.com/problemset/problem/227/B

var n = parseInt(readline());
var a = readline().split(" ").map(Number);
var m = parseInt(readline());
var b = readline().split(" ").map(Number);
var sum1 = 0, sum2 = 0;
  

for (i = 0; i <= b.length; i++) {
  sum1 += a.indexOf(b[i]) + 1;
}

var areverse = a.reverse();

for (i = 0; i <= b.length; i++) {
  sum2 += areverse.indexOf(b[i]) + 1;
}

print([sum1, sum2].join(" "));

//load('js/Effective_Approach.js')
