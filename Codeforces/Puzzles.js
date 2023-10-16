// https://codeforces.com/contest/337/problem/A

var x = readline().split(" ").map(Number);
var n = x[0] - 1;
var m = x[1];
var f = readline().split(" ").map(Number);
f.sort((a, b) => a - b);
var best = Number.POSITIVE_INFINITY;
for (var i = 0; i < m - n; i++) {
  best = Math.min(best, f[i + n] - f[i]);
}
print(best);

//load('js/Puzzles.js')
