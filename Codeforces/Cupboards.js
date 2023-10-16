//https://codeforces.com/problemset/problem/248/A

//Declare No. of Cupboards
var  n = parseInt(readline());

//Declare var for array
var inp;

//Declare counters for doors condition
var leftOne = 0;
var rightOne = 0;
var leftZero = 0;
var rightZero = 0;

//Looping to count doors conditions
for (var i = 0; i < n; i++) {
    inp = readline().split(" ");

    if(inp[0] == 1) {
        leftOne ++;
    }else {
        leftZero ++;
    }

    if(inp[1] == 1) {
        rightOne ++;
    }else {
        rightZero ++;
    }
}

//Printing time needed to change doors to 
//right positions.
if(leftOne >= leftZero && rightOne > rightZero)  {
    print(leftZero + rightZero);
}
if(leftOne < leftZero && rightOne >= rightZero)  {
    print(leftOne + rightZero);
}
if(leftOne >= leftZero && rightOne < rightZero)  {
    print(leftZero + rightOne);
}
if(leftOne < leftZero && rightOne <= rightZero)  {
    print(leftOne + rightOne);
}

//load('js/Cupboards.js')