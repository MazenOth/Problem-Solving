var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    let n = w.slice(0, Math.floor(w.length / 2));
    let j = w.slice(Math.ceil(w.length / 2), w.length);
    if (n == j.split("").reverse().join("")) return w;
  }
  return "";
};
