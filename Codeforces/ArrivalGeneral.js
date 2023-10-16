//https://codeforces.com/problemset/problem/144/A

//Declare array length n
//and hieghts array.
var n = parseInt(readline());
var hieghts = readline().split(' ');

//Get the max and min elements
//of hieghts.
var max = Math.max(...hieghts);
var min = Math.min(...hieghts);

//Get the index of max and min
var maxIndex = hieghts.indexOf(max.toString());
var minIndex = hieghts.lastIndexOf(min.toString());

//Check if max index > min index
//the mives will decrease by 1
//coz min will swap with max
if(maxIndex > minIndex) {
    var result = Math.abs(maxIndex - 1) + Math.abs((n - 1) - minIndex)
}else {
    result = Math.abs(maxIndex - 0) + Math.abs((n - 1) - minIndex)
}

print(result);


//load('js/ArrivalGeneral.js')
