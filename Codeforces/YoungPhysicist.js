//Usually n is no. of occurances we have.
var n = parseInt(readline());

//Declaring our variables
var x, y, z; //coordinations

var sumX = 0; //sums
var sumY = 0;
var sumZ = 0;

//We have to declare our var
//for looping and making array
//for each line of input outside loop.
var inp;

//Looping to calculate sums
for(var i = 0; i < n; i++) {
    //Making a length 3 array every iteration
	inp = readline().split(" "); //[1, 2, 3]

    //store values for each iteration
    x = parseInt(inp[0]);
    y = parseInt(inp[1]);
    z = parseInt(inp[2]);

    //calculating sum
    sumX += x;
    sumY += y;
    sumZ += z;
}

//print out through logic the out put
if(sumX === 0 && sumY === 0 && sumZ === 0) {
    print("YES");
}else{
    print("NO");
}

//load('js/YoungPhysicist.js')