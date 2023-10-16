// https://codeforces.com/problemset/problem/272/A

var n = parseInt(readline());
var fingers = readline().split(' ').map(Number);
var sumOfFingers = fingers.reduce((a, b) => a + b);
var counter = 0;

for (var i = 1; i <= 5; i++) {
    if(((sumOfFingers+i) % (n+1)) !== 1) {
        counter ++;
    }
}

print(counter);

//load('js/Dima_and_Friends.js')