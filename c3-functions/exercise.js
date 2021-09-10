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

// Factorial

function factorial(n) {
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * factorial(5)
 *  5 * factorial(4)
 *    4 * factorial(3)
 *      3 * factorial(2)
 *        2 * factorial(1)
 *          1 * factorial(0)
 *          return 1
 *        return 2
 *      return 6
 *    return 24
 *  return 120
 */

function rangeRec(x, y, range = []) {
  if (x >= y) {
    return range;
  }
  range.push(x + 1);
  return rangeRec(x + 1, y, range);
}

console.log(rangeRec(3, 9));

function fibonacci(n,range=[]){
  if(n <= 0){
    return range
  }else{
    range.push(n)
    return n-1 + fibonacci(n-1,range)
  }
}

console.log(fibonacci(10))