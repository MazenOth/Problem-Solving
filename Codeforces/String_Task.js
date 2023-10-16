// https://codeforces.com/problemset/problem/118/A

// print(readline().replace(/[AOYEUI]/gi, "").split('').map(char => `.${char}`).join('').toLowerCase());
print(readline().toLowerCase().replace(/[aoyeui]/g, '').replace(/(.)/g, '.$1'));

//load('js/String_Task.js')
