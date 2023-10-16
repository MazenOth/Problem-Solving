// https://codeforces.com/problemset/problem/96/A

var n = readline();
print(n.replace(/1{7}|0{7}/g, "").length != n.length ? "YES" : "NO");

//load('js/Football2.js')
