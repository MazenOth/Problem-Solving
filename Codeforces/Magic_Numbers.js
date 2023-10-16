var input = readline();

for (var i = 0; i < input.length; i++) {
  if (
    input.charAt(i) === "4" &&
    input.charAt(i + 1) === "4" &&
    input.charAt(i + 2) === "4"
  ) {
    print("NO");
    break;
  }
}

var magic = input.replace(/144/g, "").replace(/14/g, "").replace(/1/g, "");

if (magic.length !== 0) {
  print("NO");
} else {
  print("YES");
}

//load('js/Magic_Numbers.js')
