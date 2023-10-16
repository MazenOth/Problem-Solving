var sortSentence = function (s) {
  let index = s.replace(/[^1-9]/g, "").split("");
  let sentence = s.replace(/[1-9]/g, "").split(" ");
  let sorted = [];

  for (let i = 0; i < index.length; i++) {
    sorted[index[i] - 1] = sentence[i];
  }

  return sorted.join(" ");
};
