// https://codeforces.com/problemset/problem/230/A

var k = readline().split(" ").map(Number);
var s = k[0];
var n = k[1];
var inp;
var arr = [];
var count = n;

for (var i = 0; i < n; i++) {
  inp = readline().split(" ").map(Number);
  arr.push(inp);
}
arr.sort((a, b) => a[0] - b[0]);

for (var i = 0; i < n; i++) {
  if (s > arr[i][0]) {
    s += arr[i][1];
    count--;
  }
}

print(count == 0 ? "YES" : "NO");

//load('js/Dragons.js')
