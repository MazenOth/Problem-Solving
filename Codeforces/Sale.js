// https://codeforces.com/problemset/problem/34/B

var n = readline().split(" ").map(Number);
var a = readline().split(" ").map(Number);
var m = n[1];
var sum = 0;

a.sort((a, b) => a - b);

for (var i = 0; i < m; i++) {
  if (a[i] < 0) {
    sum += Math.abs(a[i]);
  }
}

print(sum);

//load('js/Sale.js')
