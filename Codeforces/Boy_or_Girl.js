
https://codeforces.com/problemset/problem/236/A

var s = readline();
//Turn into array and filter by 
//new set then join into string
var filtered = [... new Set(s)].join('');

if(filtered.length % 2 != 0) {
    print("IGNORE HIM!");
}else {
    print("CHAT WITH HER!");
}

//load('js/Boy_or_Girl.js')
