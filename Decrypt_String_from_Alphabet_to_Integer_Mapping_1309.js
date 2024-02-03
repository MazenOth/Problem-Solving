var freqAlphabets = function (s) {
  const map = new Map();

  let temp = [];

  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
  ];

  for (let i = 0; i < alpha.length; i++) {
    map.set(numbers[i], alpha[i]);
  }

  let i = 0;

  while (i < s.length) {
    if (s[i + 2] == "#") {
      let n = s.substr(i, 2);
      temp.push(map.get(n));
      i++;
    } else if (s[i + 1] == "#" || s[i] == "#") {
      i++;
    } else {
      temp.push(map.get(s[i]));
      i++;
    }
  }
  return temp.join("");
};
