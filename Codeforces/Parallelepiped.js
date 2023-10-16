// https://codeforces.com/problemset/problem/224/A

var inp = readline().split(" ").map(Number);
var a1 = inp[0];
var a2 = inp[1];
var a3 = inp[2];

var x = Math.sqrt((a1 * a2) / a3);
var y = Math.sqrt((a1 * a3) / a2);
var z = Math.sqrt((a3 * a2) / a1);

print((x + y + z) * 4);

//load('js/Parallelepiped.js')
