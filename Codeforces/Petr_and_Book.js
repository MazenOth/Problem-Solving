// https://codeforces.com/problemset/problem/139/A

var n = parseInt(readline());
var d = readline().split(" ").map(Number);
var i = 0;
var sum = 0;

while (i <= 7) {
  sum += d[i++];

  if (sum >= n) {
    print(i);
    break;
  } else if (i == 7 && sum < n) {
    i = 0;
  }
}

//load('js/Petr_and_Book.js')
