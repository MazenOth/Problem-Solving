// https://codeforces.com/problemset/problem/151/A

var t = readline().split(' ');

var d = Math.floor((t[1] * t[2]) / t[6]);
var l = Math.floor(t[3] * t[4]);
var s = Math.floor(t[5] / t[7]);

print(Math.floor(Math.min(d, l, s) / t[0]));


//load('js/Soft_Drinking.js')