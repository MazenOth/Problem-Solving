// https://codeforces.com/contest/34/problem/A

var n = parseInt(readline());
var inp = readline().split(" ").map(Number);
var arr = [];
var temp = [];

for (var i = 0; i < n - 1; i++) {
  arr.push(Math.abs(inp[i] - inp[i + 1]));
}
arr.push(Math.abs(inp[n - 1] - inp[0]));

var index = arr.indexOf(Math.min(...arr));

if (index != n - 1) {
  temp = [index + 1, index + 2];
  print(temp.join(" "));
} else {
  temp = [n, 1];
  print(temp.join(" "));
}

//load('js/Reconnaissance.js')
