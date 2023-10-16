// https://codeforces.com/problemset/problem/352/A

// BigInt problem :/
var n = parseInt(readline());
var a = readline().split(" ").map(Number);

if (!a.includes(0)) {
  print(-1);
} else if (a.filter(x => (x == 5)).length < 9) {
  print(0);
} else {
    let s = a.sort((a, b) => b - a).join("");
  for (i = 0; i < n; i++) {
    if (s % 90 == 0) {
      print(s);
      break;
    } else {
      let c = s.split("").map(Number);
      c.splice(c.lastIndexOf(5), 1);
      s = c.join("");
      continue;
    }
  }
}

//load('js/Jeff_and_Digits.js')
