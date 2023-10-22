var countConsistentStrings = function (allowed, words) {
  let res = words.length;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (allowed.includes(words[i][j])) {
        continue;
      }
      res--;
      break;
    }
  }
  return res;
};

