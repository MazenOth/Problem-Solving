// https://codeforces.com/problemset/problem/459/B

var n = parseInt(readline());
var f = readline()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
var res = [f[0] - f[n - 1]];
var j = 1,
  k = 1;

for (var i = 1; i < n; i++) {
  if (f[i] === f[0]) {
    j++;
  } else {
    break;
  }
}
for (var i = n - 2; i < n; i--) {
  if (f[i] === f[n - 1]) {
    k++;
  } else {
    break;
  }
}

if (j === 1 && k === 1) {
  res.push(j);
} else if (j > 1 && k === 1) {
  res.push(j);
} else if (k > 1 && j === 1) {
  res.push(k);
} else if (j > 1 && k > 1) {
  res.push(j + k);
}

print(res.join(" "));

//load('js/Pashmak_and_Flowers.js')
