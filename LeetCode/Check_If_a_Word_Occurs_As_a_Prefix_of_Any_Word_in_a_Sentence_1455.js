var isPrefixOfWord = function (sentence, searchWord) {
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(searchWord)) {
      return i + 1;
    }
    if (i == arr.length - 1) {
      return -1;
    }
  }
};


