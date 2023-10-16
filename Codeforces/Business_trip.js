// https://codeforces.com/problemset/problem/149/A

var k = parseInt(readline());
var m = readline().split(" ").map(Number);

m.sort((a, b) => b - a);

var i = 0,
  sum = 0;
while (i <= 12) {
  if (sum >= k) {
    print(i);
    break;
  } else if (i < 12) {
    sum += m[i++];
  } else {
    print(-1);
    break;
  }
}

//load('js/Business_trip.js')
