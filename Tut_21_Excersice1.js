const prompt = require("prompt-sync")();
function getRint(max) {
  return Math.floor(Math.random() * max);
}
let a = getRint(100);
let chance = 0;
let num;
do {
  num = prompt("Enter a Number between 1-100 :-");
  num = Number.parseInt(num);
  if (a > num) {
    console.log(
      "The Number you guessed " + num + " is smaller Then the actual Number\n"
    );
  } else if (a < num) {
    console.log(
      "The Number you guessed " + num + " is greater Then the actual NUmber\n"
    );
  } else {
    console.log("The number you guessed " + a + " is correct\n");
  }
  chance += 1;
} while (a != num);
let score = 100 - chance;
console.log("Your score is", score);
