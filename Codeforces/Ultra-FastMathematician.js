// https://codeforces.com/problemset/problem/61/A

//Declare our inputs as two strings
var x = readline();
var y = readline();

//Declare empty array
var arr = [];

//Looping through strings
//and pushing 0 or 1 into
//the new array
for (var i = 0; i < x.length; i++) {
    if(x.charAt(i) === y.charAt(i)) {
        arr.push(0);
    }else{
        arr.push(1);
    }
}

//Turn array into string
//and removing commas with regex
var result = arr.toString()
result = result.replace(/,/g, '');
print(result);


//load('js/Ultra-FastMathematician.js')