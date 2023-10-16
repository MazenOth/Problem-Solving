// https://codeforces.com/problemset/problem/110/A

//Declare our int.
var n = readline();

//Using Regex to remove all except
//lucky digits which are 4 and 7.
n = n.replace(/[^47]/g, "");

//Checking if the lucky numbers we have
//equals to the lucky numbers.
if(n.length === 4 || n.length === 7) {
    print("YES");
}else {
    print("NO");
}

// load('js/NearlyLuckyNumber.js')