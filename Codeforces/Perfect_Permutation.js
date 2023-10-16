// https://codeforces.com/problemset/problem/233/A

var n = parseInt(readline());
var arr = [n];
var i = n-1;
if(n % 2) {
    print("-1");
} else {
    while(i < n) {
        arr.push(i--);
        if(i === 0){break;}
    }
    print(arr.join(" "));
}

//load('js/Perfect_Permutation.js')