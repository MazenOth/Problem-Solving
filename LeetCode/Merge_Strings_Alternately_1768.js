var mergeAlternately = function (word1, word2) {
  const length = word1.length > word2.length ? word1.length : word2.length;
  let arr = [];

  for (let i = 0; i < length; i++) {
    if (i < word1.length) {
      arr.push(word1[i]);
    }
    if (i < word2.length) {
      arr.push(word2[i]);
    }
  }
  return arr.join("");
};

mergeAlternately("abcd", "pq");
