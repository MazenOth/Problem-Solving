var finalString = function (s) {
  const arr = s.split("");
  let res = [];

  for (let i = 0; i < s.length; i++) {
    if (arr[i] !== "i") {
      res.push(arr[i]);
    } else {
      res.reverse();
      continue;
    }
  }
  return(res.join(""));
};

