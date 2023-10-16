// https://codeforces.com/problemset/problem/231/A

var n = parseInt(readline());
var res = 0;
var temp;
var f;

for (var i = 0; i < n; i++) {
    temp = readline().split(' ').map(Number);
    f = temp.filter(item => item !== 0);

    if(f.length >= 2) {
        res ++;
    } 
}

print(res);

//load('js/Team.js')