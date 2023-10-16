// https://codeforces.com/problemset/problem/450/A

var inp = readline().split(" ").map(Number);
var m = inp[1];
var children = readline().split(" ").map(Number);
var maxChildren = children.map((child) => Math.ceil(child / m));
var lastMaxChildIndex = maxChildren.lastIndexOf(Math.max(...maxChildren)) + 1;
print(lastMaxChildIndex);

//load('js/Jzzhu_and_Children.js')
