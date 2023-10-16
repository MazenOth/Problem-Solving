// https://codeforces.com/problemset/problem/271/A

var n = parseInt(readline());
var myFunc = num => Number(num);

var i = n+1;

while(i <= 10000) {
    var intArr = Array.from(String(i), myFunc);
    var newArr = [...new Set(intArr)];
    if(newArr.length == 4) {
        print(i);
        break;
    }else {
        i++;
    }
}

//load('js/BeautifulYear.js')