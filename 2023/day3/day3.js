const fs = require("fs");

const input = fs.readFileSync("./example1.txt", "utf8");
const lines = input.trim().split("\n");

function partOne() {
  // Given some lines (example1 or input) with numbers and symbols, find the numbers which are adjacent to the symbols. They can be either next to it, above, below or diagonal. Periods do not count as symbols. Return the sum of all the numbers found.
  const period = ".";
 const values = lines.map((line) => {
    let sum = 0;
    let symbolsIndexArray = [];

    for (let i = 0; i < line.length; i++) {
      if (line[i] === period) {
        continue;
      }
      let value = (line[i]);
      if (isNaN(value)) {
        console.log(value);
        symbolsIndexArray.push(i);
      }
    }
    console.log(symbolsIndexArray);
    // return something; 
});
}

console.log(partOne());
