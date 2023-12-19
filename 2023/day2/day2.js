const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8");
const games = input.trim().split("\n");

const maxRedCubes = 12;
const maxGreenCubes = 13;
const maxBlueCubes = 14;
let idArray = [];
let invalidGameID = [];
let arrayOfMinPossibleCubes = [];

function partOne() {
  // Todo: Edit, remove, add and simplify comments once logic is done.
  const values = games.map((game) => {
    let redCubes = 0;
    let greenCubes = 0;
    let blueCubes = 0;
    let gameID = game.split(" ")[1].split(":")[0];
    let setGroup = game.split(":")[1].split(";");

    // console.log(setGroup);
    setGroup.forEach((set) => {
      // Add something here tomorrow
      // Example array: [ ' 3 blue, 4 red', ' 1 red, 2 green, 6 blue', ' 2 green\r' ]
      let setSample = set.split(",").map((set) => set.trim());
      // console.log("setSample: ", setSample);
      redCubes = 0;
      greenCubes = 0;
      blueCubes = 0;

      setSample.forEach((sample) => {
        // Go through the sample and identify the number which comes before the color and then add it to the specific colorCubes.
        // Example: [ '3 blue', '4 red' ]
        // console.log("sample", sample);
        let red = sample.indexOf("red");
        let green = sample.indexOf("green");
        let blue = sample.indexOf("blue");
        if (red !== -1) {
          red === 2
            ? (redCubes = sample[red - 2])
            : (redCubes = sample[red - 3] + sample[red - 2]);
        }
        if (green !== -1) {
          green === 2
            ? (greenCubes = sample[green - 2])
            : (greenCubes = sample[green - 3] + sample[green - 2]);
        }
        if (blue !== -1) {
          blue === 2
            ? (blueCubes = sample[blue - 2])
            : (blueCubes = sample[blue - 3] + sample[blue - 2]);
        }
      });
      console.log(
        "red: ",
        redCubes,
        "green: ",
        greenCubes,
        "blue :",
        blueCubes
      );

      if (redCubes > maxRedCubes) {
        if (!invalidGameID.includes(gameID)) {
          invalidGameID.push(gameID);
        }
        return false;
      }
      if (greenCubes > maxGreenCubes) {
        if (!invalidGameID.includes(gameID)) {
          invalidGameID.push(gameID);
        }
        return false;
      }
      if (blueCubes > maxBlueCubes) {
        if (!invalidGameID.includes(gameID)) {
          invalidGameID.push(gameID);
        }
        return false;
      }
      if (
        redCubes <= maxRedCubes &&
        greenCubes <= maxGreenCubes &&
        blueCubes <= maxBlueCubes
      ) {
        // If gameID is not in idArray, add it
        if (!idArray.includes(gameID)) {
          idArray.push(gameID);
        }
      }
    });

    // remove gameID from idArray if it is in invalidGameID
    invalidGameID.forEach((id) => {
      if (idArray.includes(id)) {
        idArray.splice(idArray.indexOf(id), 1);
      }
    });
  });

  console.log("idArray: ", idArray);

  // Final Sum
  let sum = idArray.reduce((sum, value) => sum + parseInt(value), 0);
  console.log(`Total Sum: ${sum}`);
  return sum;
}

console.log(partOne());

function partTwo() {
  // This part gets the max number of cubes for each color in each valid game and multiplies them and then adds the sum of all powers.
  // Todo: Edit, remove, add and simplify comments once logic is done.
  games.map((game) => {
    let redCubes = 0;
    let greenCubes = 0;
    let blueCubes = 0;
    let gameID = game.split(" ")[1].split(":")[0];
    let setGroup = game.split(":")[1].split(";");
    let minPossibleRedCubes = 0;
    let minPossibleGreenCubes = 0;
    let minPossibleBlueCubes = 0;

    // console.log(setGroup); a set group is the same as a game but filtered.
    console.log("new game");
    setGroup.forEach((set) => {
      // Add something here tomorrow
      // Example array: [ ' 3 blue, 4 red', ' 1 red, 2 green, 6 blue', ' 2 green\r' ]
      let setSample = set.split(",").map((set) => set.trim());
      console.log("setSample: ", setSample);
      redCubes = 0;
      greenCubes = 0;
      blueCubes = 0;

      setSample.forEach((sample) => {
        // Go through the sample and identify the number which comes before the color and then add it to the specific colorCubes.
        // Example: [ '3 blue', '4 red' ]
        // console.log("sample", sample);
        // console.log(typeof redCubes)
        let red = sample.indexOf("red");
        let green = sample.indexOf("green");
        let blue = sample.indexOf("blue");
        if (red !== -1) {
          red === 2
            ? (redCubes = sample[red - 2])
            : (redCubes = sample[red - 3] + sample[red - 2]);
        }
        if (parseInt(redCubes) > minPossibleRedCubes) {
          minPossibleRedCubes = parseInt(redCubes);
        }
        if (green !== -1) {
          green === 2
            ? (greenCubes = sample[green - 2])
            : (greenCubes = sample[green - 3] + sample[green - 2]);
        }
        if (parseInt(greenCubes) > minPossibleGreenCubes) {
          minPossibleGreenCubes = parseInt(greenCubes);
        }
        if (blue !== -1) {
          blue === 2
            ? (blueCubes = sample[blue - 2])
            : (blueCubes = sample[blue - 3] + sample[blue - 2]);
        }
        if (parseInt(blueCubes) > minPossibleBlueCubes) {
          minPossibleBlueCubes = parseInt(blueCubes);
        }
      });

      if (redCubes > maxRedCubes) {
        if (!invalidGameID.includes(gameID)) {
          invalidGameID.push(gameID);
        }
        return false;
      }
      if (greenCubes > maxGreenCubes) {
        if (!invalidGameID.includes(gameID)) {
          invalidGameID.push(gameID);
        }
        return false;
      }
      if (blueCubes > maxBlueCubes) {
        if (!invalidGameID.includes(gameID)) {
          invalidGameID.push(gameID);
        }
        return false;
      }

      if (
        redCubes <= maxRedCubes &&
        greenCubes <= maxGreenCubes &&
        blueCubes <= maxBlueCubes
      ) {
        // If gameID is not in idArray, add it
        if (!idArray.includes(gameID)) {
          idArray.push(gameID);
        }
      }
    });

    arrayOfMinPossibleCubes.push({
      total: minPossibleBlueCubes * minPossibleGreenCubes * minPossibleRedCubes,
      redCubes: minPossibleRedCubes,
      greenCubes: minPossibleGreenCubes,
      blueCubes: minPossibleBlueCubes,
    });

    // remove gameID from idArray if it is in invalidGameID
    invalidGameID.forEach((id) => {
      if (idArray.includes(id)) {
        idArray.splice(idArray.indexOf(id), 1);
      }
      if (arrayOfMinPossibleCubes.includes(id)) {
        arrayOfMinPossibleCubes.splice(arrayOfMinPossibleCubes.indexOf(id), 1);
      }
    });
  });

  let sumOfMinPossibleCubes = arrayOfMinPossibleCubes.reduce(
    (sum, value) => sum + parseInt(value.total),
    0
  );
  console.log(`Total Sum of min possible cubes: ${sumOfMinPossibleCubes}`);

  return sumOfMinPossibleCubes;
}

console.log(partTwo());
