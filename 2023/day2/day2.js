const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8");
const games = input.trim().split("\n");

const maxRedCubes = 12;
const maxGreenCubes = 13;
const maxBlueCubes = 14;
