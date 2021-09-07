//Min

function min(a, b) {
  return a < b ? a : b;
}

// Recursion

function isEven(n) {
  if (n < 0) {
    return isEven(-n);
  } else if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

//Bean counting

function countBs(string) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") result++;
  }
  return result;
}

function countChar(string, searchChar) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === searchChar) result++;
  }
  return result;
}
console.log(countChar("kakkerlak", "k"));
