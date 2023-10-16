// https://codeforces.com/contest/263/problem/A

//Declaring our variables
//temps to store index of 1
var inp, tempi, tempj, result;
var arr = [];

//Looping to have 5*5 Array
//from our input.
for (var i = 0; i < 5; i++) {
    inp = readline().split(" ");  
    
    arr[i] = inp;
}

//Nested loop to get index of 1
//and store it.
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {

        if(arr[i][j] == 1) {
            tempi = i;
            tempj = j;
       }            
    }   
}

//Substract each temp from beautiful index
//to get No. of moves needed 
result = Math.abs((tempi - 2)) + Math.abs((tempj - 2)) 
print(result);

//load('js/BeautifulMatrix.js')