// https://codeforces.com/problemset/problem/228/A

var s = readline().split(' ').map(Number);
//Return filtered the duplicats
//of the array.
var filtered = [...new Set(s)];
print(4 - filtered.length);

//load('js/horseshoe.js')