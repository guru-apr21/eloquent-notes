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
