//https://codeforces.com/problemset/problem/200/B

var n = parseInt(readline());
var c = readline().split(' ');
var sum = 0;

for (var i = 0; i < n; i++) {
     sum += parseInt(c[i]);
}
print(sum/n.toFixed(12));

//load('js/Drinks.js')