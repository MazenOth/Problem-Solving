var squareIsWhite = function (coordinates) {
  const black = ["a", "c", "e", "g"];
  const white = ["b", "d", "f", "h"];
  if (black.includes(coordinates[0]) && coordinates[1] % 2 == 0) {
    return true;
  } else if (black.includes(coordinates[0]) && coordinates[1] % 2 != 0) {
    return false;
  } else if (white.includes(coordinates[0]) && coordinates[1] % 2 == 0) {
    return false;
  } else {
    return true;
  }
};
