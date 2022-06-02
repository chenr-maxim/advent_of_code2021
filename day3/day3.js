const fs = require("fs");

//part 1
const input = fs
  .readFileSync("day3_puzzle_input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x));

console.log(input, "input");
let gamma_rate = "";
let epislon_rate = "";

for (let i = 0; i < input[0].length; i++) {
  let zero_bit_count = 0;
  let one_bit_count = 0;

  for (let n = 0; n < input.length; n++) {
    if (input[n].charAt(i) === "0") {
      zero_bit_count++;
    } else {
      one_bit_count++;
    }
  }

  if (parseInt(zero_bit_count) > parseInt(one_bit_count)) {
    gamma_rate += "0";
  } else {
    gamma_rate += "1";
  }
}

for (let i = 0; i < gamma_rate.length; i++) {
  if (gamma_rate.charAt(i) === "1") {
    epislon_rate += "0";
  } else {
    epislon_rate += "1";
  }
}

console.log(parseInt(gamma_rate, 2) * parseInt(epislon_rate, 2), "product");

//part 2
