// https://codeforces.com/problemset/problem/281/A

//Declare our string.
var s = readline();

//Check if first char is upper or lower.
if(s.charAt(0) === s.charAt(0).toLowerCase()) {
    s = s.replace(s.charAt(0), s.charAt(0).toUpperCase());
    print(s);
}else {
    print(s);
}

//load('js/WordCapitalization.js')