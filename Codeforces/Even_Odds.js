// https://codeforces.com/problemset/problem/318/A

var inp = readline().split(" ").map(Number);
var n = inp[0];
var x = inp[1];

x = x * 2 - 1;

print(x <= n ? x : ((x-n) % 2 === 0) ? (x - n) : (x - n + 1))


//load('js/Even_Odds.js')
