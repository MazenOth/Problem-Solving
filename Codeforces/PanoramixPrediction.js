//https://codeforces.com/problemset/problem/80/A

//Turn our input into array
var n = readline().split(' '); 
//Make an array of all prime No. form 1 to 50.
var p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

var firstIndex = p.indexOf(parseInt(n[0]));
var secondIndex = p.indexOf(parseInt(n[1]));
//Check if two numbers follow each other
(secondIndex - firstIndex == 1) ? print('YES') : print('NO');


//load('js/PanoramixPrediction.js')