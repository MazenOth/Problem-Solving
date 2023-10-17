var isAcronym = function (words, s) {
  let i = 0;
  let res = true;

  while (i < words.length) {
    if (words.length != s.length) {
      res = false;
      break;
    } else {
      if (words[i].charAt(0) == s.charAt(i)) {
        i++;
      } else {
        res = false;
        break;
      }
    }
  }
  return res;
};
