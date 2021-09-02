//Looping a triangle

let star = "*";
for (let count = 0; count < 8; count++) {
  console.log(star);
  star += "*";
}

// Fizzbuzz

for (let count = 0; count < 100; count++) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log("FizzBuzz");
  } else if (count % 3 === 0) {
    console.log("Fizz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
}

// Chess board
let size = 8;

let oddRow = "";
let evenRow = "";
for (let i = 1; i <= size; i++) {
  if (i % 2 === 0) {
    oddRow += "#";
    evenRow += " ";
  } else {
    oddRow += " ";
    evenRow += "#";
  }
}

for (let i = 1; i <= size; i++) {
  i % 2 === 0 ? console.log(evenRow) : console.log(oddRow);
}
