// https://codeforces.com/problemset/problem/215/A

var n = parseInt(readline());
var a = readline().split(" ").map(Number);
var m = parseInt(readline());
var b = readline().split(" ").map(Number);
var res = [];

for (var i = 0; i < m; i++) {
  for (var j = 0; j < n; j++) {
    var ratio = b[i] / a[j];
    if (Number.isInteger(ratio)) {
      res.push(ratio);
    }
  }
}
var max = Math.max(...res);
print(res.filter(a => a == max).length);

//load('js/Bicycle_Chain.js')
