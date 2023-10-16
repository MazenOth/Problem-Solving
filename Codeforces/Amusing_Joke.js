
// https://codeforces.com/problemset/problem/141/A 

//Using spread op to turn into array
//then sort chars and join into string
//to compare
var s = [... readline() + readline()].sort().join('');
var m = [... readline()].sort().join('');

print (m === s ? "YES" : "NO");


//load('js/Amusing_Joke.js')