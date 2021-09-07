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

console.log(isEven(-2));
