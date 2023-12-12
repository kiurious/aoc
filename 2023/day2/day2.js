const fs = require("fs");

const input = fs.readFileSync("./example1.txt", "utf8");
const games = input.trim().split("\n");

const maxRedCubes = 12;
const maxGreenCubes = 13;
const maxBlueCubes = 14;

function partOne() {
  const values = games.map((game) => {
    let redCubes = 0;
    let greenCubes = 0;
    let blueCubes = 0;
    let gameID = game.split(" ")[1].split(":")[0];
    let setGroup = game.split(":")[1].split(";");

    console.log(setGroup);
    setGroup.forEach((set) => {
      // add something here tomorrow
    });
  });
}

console.log(partOne());
