// https://codeforces.com/problemset/problem/205/A

var n = parseInt(readline());
var inp = readline().split(" ").map(Number);
var min = Math.min(...inp);
var fI = inp.indexOf(min);
var lI = inp.lastIndexOf(min);

if (fI === lI) {
  print(fI + 1);
} else {
  print("Still Rozdil");
}

//load('js/Little_Elephant_and_Rozdil.js')
