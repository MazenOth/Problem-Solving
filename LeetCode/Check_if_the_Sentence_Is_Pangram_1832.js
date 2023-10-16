var checkIfPangram = function (sentence) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let i = 0;
  let status = true;

  while (i < letters.length) {
    if (sentence.includes(letters.charAt(i))) {
      i++;
    } else {
      status = false;
      break;
    }
  }
  return status;
};
