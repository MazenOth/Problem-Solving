// https://codeforces.com/problemset/problem/116/A

var n = parseInt(readline());
var arr = [0];
var inp;

for (var i = 0; i < n; i++) {
  inp = readline().split(" ").map(Number);
  arr.push(arr[i] - inp[0] + inp[1]);
}
print(Math.max(...arr));

//load('js/Tram.js')
