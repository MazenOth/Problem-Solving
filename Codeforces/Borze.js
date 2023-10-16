// https://codeforces.com/problemset/problem/32/B

//Declare our var as string
var inp = readline();
//Using Regex to convert code
inp = inp.replace(/--/g, '2').replace(/-./g, '1').replace(/[.]/g, '0');
print(inp);

//load('js/Borze.js') 


