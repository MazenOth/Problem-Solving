// https://codeforces.com/problemset/problem/124/A

var l = readline().split(" ").map(Number);
var n = l[0];
var a = l[1];
var b = l[2];
print(Math.min((n - a), (b + 1)));

//load('js/The_number_of_positions.js')