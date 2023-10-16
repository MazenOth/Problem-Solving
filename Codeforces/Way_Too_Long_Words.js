// https://codeforces.com/problemset/problem/71/A

var n = parseInt(readline());

var word;

for (var i = 0; i < n; i++) {
    word = readline();

    if(word.length <= 10) {
        print(word);
    }else {
        print(word[0] + (word.length-2) + word[word.length-1]);
    }
}


//load('js/Way_Too_Long_Words.js')