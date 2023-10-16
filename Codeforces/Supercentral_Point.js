// https://codeforces.com/problemset/problem/165/A

var n = parseInt(readline());
var inp;
var points = [];
var ans = 0;

for (var i = 0; i < n; i++) {
    inp = readline().split(" ").map(Number);
    points.push(inp);
}

for (var i = 0; i < n; i++) {
  var p1 = points[i];
  var temp = [];
  for (var j = 0; j < n; j++) {
    var p2 = points[j];
    if (p1[0] === p2[0]) {
      if (p1[1] > p2[1]) {
        temp[0] = 1;
      } else if (p1[1] < p2[1]) {
        temp[1] = 1;
      }
    }
    if (p1[1] === p2[1]) {
      if (p1[0] > p2[0]) {
        temp[2] = 1;
      } else if (p1[0] < p2[0]) {
        temp[3] = 1;
      }
    }
    if (temp[0] === 1 && temp[1] === 1 && temp[2] === 1 && temp[3] === 1) {
      ans++;
    }
  }
}

print(ans);

//load('js/Supercentral_Point.js')
