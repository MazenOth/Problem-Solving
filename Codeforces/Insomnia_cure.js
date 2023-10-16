// https://codeforces.com/problemset/problem/148/A

var k = parseInt(readline());
var l = parseInt(readline());
var m = parseInt(readline());
var n = parseInt(readline());
var d = parseInt(readline());
var arr = [];
var i = 1;

while (i <= d) {
  if (i % k === 0 || i % l === 0 || i % m === 0 || i % n === 0) {
    arr.push(i++);
  } else {
    i++;
  }
  if (i > d) {
    break;
  }
}
print(arr.length);

//load('js/Insomnia_cure.js')
