// https://codeforces.com/problemset/problem/339/B?f0a28=1

var x = readline().split(" ").map(Number);
var n = x[0];
var m = x[1];
var h = readline().split(" ").map(Number);
h.unshift(1);
var time = 0;

for (var i = 0; i < m; i++) {
  var a = h[i];
  var b = h[i + 1];

  if (a <= b) {
    time += b - a;
  } else if (a > b) {
    time += n - a + b;
  }
}

print(time);

//load('js/Xenia_and_Ringroad.js')
