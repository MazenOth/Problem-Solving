var maximumNumberOfStringPairs = function (words) {
  return (
    words.length -
    new Set(words.map((a) => (a[0] > a[1] ? a[0] + a[1] : a[1] + a[0]))).size
  );
};
