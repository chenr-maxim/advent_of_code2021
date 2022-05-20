const fs = require("fs");

// const practice_input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

//part 1
const input = fs
  .readFileSync("day1_puzzle_input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

let greaterCount = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] < input[i + 1]) {
    greaterCount++;
  }
}

console.log("greaterCount");
console.log(greaterCount);

//part 2
let greaterCount_2 = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i + 1] == undefined) {
    break;
  }
  let firstSet = input[i] + input[i + 1] + input[i + 2];
  let secondSet = input[i + 1] + input[i + 2] + input[i + 3];

  if (firstSet < secondSet) {
    greaterCount_2++;
  }
}

console.log("greaterCount_2");
console.log(greaterCount_2);
