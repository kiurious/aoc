// AOC day 1

// The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

// Consider your entire calibration document. What is the sum of all of the calibration values?

// get each line of the file as an array of strings and add the first and last digits of each line, if there is only one digit, that digit is added twice. All other digits are ignored.

const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8");
const lines = input.trim().split("\n");

function partOne() {
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

// console.log(partOne("./example.txt"));

// Part Two
// Some of the digits are spelled out with letters; "one", "two", "three", etc.
// Find the real first and last digits.

const spelledOutNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function partTwo() {
  const values = lines.map((line) => {
    let firstSpelledDigit = null;
    let firstSpelledDigitIndex = null;
    let firstDigit = null;
    let firstDigitIndex = null;
    let lastSpelledDigit = null;
    let lastDigit = null;
    let lastDigitIndex = -1;
    let tempArray = [];

    // Process spelled-out numbers by going though each line and number in the object and finding all instances, assigning the index and the value of it.
    Object.keys(spelledOutNumbers).forEach((number) => {
      let startIndex = 0;
      while (startIndex < line.length) {
        let foundIndex = line.indexOf(number, startIndex);
        if (foundIndex !== -1) {
          tempArray.push({ number: number, index: foundIndex });
          startIndex = foundIndex + number.length;
        } else {
          break;
        }
      }
    });

    // Sort by index to correctly order the digits.
    tempArray.sort((a, b) => a.index - b.index);

    // Assign spelled-out numbers to its variables
    if (tempArray.length > 0) {
      firstSpelledDigitIndex = tempArray[0].index;
      firstSpelledDigit = spelledOutNumbers[tempArray[0].number];
      lastSpelledDigit =
        spelledOutNumbers[tempArray[tempArray.length - 1].number];
    }

    // Process non spelled-out digits -- adapted from part one
    for (let i = 0; i < line.length; i++) {
      if (!isNaN(parseInt(line[i]))) {
        if (firstDigit === null) {
          firstDigit = line[i];
          firstDigitIndex = i;
        }
        lastDigit = line[i];
        lastDigitIndex = i;
      }
    }

    // Determine the first and last digits based on which index is first.
    let finalFirstDigit =
      firstDigitIndex !== null &&
      (firstSpelledDigitIndex === null ||
        firstDigitIndex < firstSpelledDigitIndex)
        ? firstDigit
        : firstSpelledDigit;
    let finalLastDigit =
      lastDigitIndex > -1 &&
      (lastSpelledDigit === null ||
        lastDigitIndex > tempArray[tempArray.length - 1].index)
        ? lastDigit
        : lastSpelledDigit;

    console.log(`First: ${finalFirstDigit}, Last: ${finalLastDigit}`);

    // Return calculation or 0 if no valid digits found
    return finalFirstDigit && finalLastDigit
      ? Number(finalFirstDigit.toString() + finalLastDigit.toString())
      : 0;
  });

  // Final Sum
  let sum = values.reduce((sum, value) => sum + value, 0);
  console.log(`Total Sum: ${sum}`);
  return sum;
}

console.log(partTwo());
