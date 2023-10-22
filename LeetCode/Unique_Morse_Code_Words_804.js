var uniqueMorseRepresentations = function (words) {
  const alphabet = [
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
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let code = [];
  let finalCode = [];
  let set = new Set();

  for (let i = 0; i < words.length; i++) {
    code.push(words[i].split(""));
  }

  for (let i = 0; i < code.length; i++) {
    for (let j = 0; j < code[i].length; j++) {
      let alphaIndex = alphabet.indexOf(code[i][j]);
      let morseCode = morse[alphaIndex];
      code[i][j] = morseCode;
    }
  }

  for (let i = 0; i < code.length; i++) {
    finalCode.push(code[i].join(""));
  }

  for (let i = 0; i < finalCode.length; i++) {
    set.add(finalCode[i]);
  }
  return(set.size);
};

