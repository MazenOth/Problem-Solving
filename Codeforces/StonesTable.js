// https://codeforces.com/problemset/problem/266/A

//Declare our variables
var n = parseInt(readline());
var s = readline();

//Set a counter for similar colors
var counter = 0;

//Loop to get the count
for (var i = 0; i < n; i++) {
    if(s.charAt(i) === s.charAt(i+1)) {
        counter ++;
    }
}

print(counter);

//load('js/StonesTable.js')