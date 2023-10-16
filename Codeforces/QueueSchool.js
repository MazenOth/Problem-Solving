// https://codeforces.com/problemset/problem/266/B

//Declare t which represent
//No. of occurances.
//Notice that we need index 1
//from the length 2 array created.
var t = readline().split(" ")[1];

//Declare our string
var s = readline();

//iterate and use regix t times.
 for(var i = 0; i < t; i++) {
   s = s.replace(/BG/g, 'GB');
} 
print(s); 

//load('js/QueueSchool.js') 

