// https://codeforces.com/problemset/problem/43/A

var n = parseInt(readline());
var inp = [];
var counter = 1;

for (var i = 0; i < n; i++) {
  inp.push(readline());
}

if (n > 1) {
  for (var i = 1; i < n; i++) {
    if (inp[i] == inp[0]) {
      counter++;
    }
  }

  if (counter > n / 2) {
    print(inp[0]);
  } else {
    var set = [...new Set(inp)];
    print(set[1]);
  }
} else {
  print(inp[0]);
}

//load('js/Football.js')
