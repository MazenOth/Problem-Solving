var halvesAreAlike = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) {
      count1++;
    }
  }

  for (let i = s.length / 2; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count2++;
    }
  }

  const res = count1 == count2 ? true : false;

  return res;
};
