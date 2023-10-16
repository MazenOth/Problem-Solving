
// https://codeforces.com/problemset/problem/59/A

//Declare our string
var s = readline();

//Set two counters for sensitivity check
var counterLower = 0;
var counterUpper = 0;

//Looping through s chars to count
//upper and lower cases.
for(var i = 0; i < s.length; i++) {
    if(s.charAt(i) === s.charAt(i).toUpperCase()) {
        counterUpper ++;
    }

    if(s.charAt(i) === s.charAt(i).toLowerCase()) {
        counterLower ++;
    }
}

//Comparing cases
if(counterUpper > counterLower) {
    s = s.toUpperCase();
}else{
    s = s.toLowerCase()
}

print(s);

//load('js/Word.js')


