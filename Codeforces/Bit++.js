// https://codeforces.com/problemset/problem/282/A

var n = parseInt(readline());
var temp;
var x = 0;

for (var i = 0; i < n; i++) {
    temp = readline();
    temp.includes('+') ? x++ : x--;   
}

print(x);

//load('js/Bit++.js')