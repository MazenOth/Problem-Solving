var reversePrefix = function (word, ch) {
  const i = word.indexOf(ch);
  if (i >= 0) {
    const reverse = word.substr(0, i + 1);
    const rest = word.substr(i + 1);
    const reversed = reverse.split("").reverse().join("") + rest;
    return reversed;
  } else {
    return word;
  }
};

