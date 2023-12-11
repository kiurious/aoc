// AOC day 1

// The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

// Consider your entire calibration document. What is the sum of all of the calibration values?

// get each line of the file as an array of strings and add the first and last digits of each line, if there is only one digit, that digit is added twice. All other digits are ignored.

const fs = require("fs");

function partOne(file) {
  const input = fs.readFileSync(file, "utf8");
  const lines = input.trim().split("\n");
  const values = lines.map((line) => {
    let firstDigit = null;
    let lastDigit = null;

    for (const char of line) {
      if (!isNaN(parseInt(char))) {
        if (firstDigit === null) {
          firstDigit = char;
        }
        lastDigit = char;
      }
    }

    if (firstDigit !== null && lastDigit !== null) {
      return Number(firstDigit + lastDigit);
    } else {
      return 0;
    }
  });

  console.log(values);
  return values.reduce((sum, value) => sum + value);
}

console.log(partOne("./example.txt"));
