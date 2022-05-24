const fs = require("fs");

//part 1
const input = fs
  .readFileSync("day2_puzzle_input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x));

let horizontal_position = 0;
let vertical_position = 0;

for (let i = 0; i < input.length; i++) {
  let number = parseInt(input[i].charAt(input[i].length - 1));
  if (input[i].includes("forward")) {
    horizontal_position += number;
  } else {
    if (input[i].includes("up")) {
      vertical_position -= number;
    } else {
      vertical_position += number;
    }
  }
}

console.log(horizontal_position * vertical_position, "final depth");

//part 2

let horizontal_position2 = 0;
let aim = 0;
let depth = 0;

for (let i = 0; i < input.length; i++) {
  let number = parseInt(input[i].charAt(input[i].length - 1));
  if (input[i].includes("forward")) {
    horizontal_position2 += number;
    if (aim != 0) {
      depth += number * aim;
    }
  } else {
    if (input[i].includes("up")) {
      aim -= number;
    } else {
      aim += number;
    }
  }
}

console.log(horizontal_position2 * depth, "position * depth");
