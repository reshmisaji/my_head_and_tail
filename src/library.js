const fs = require("fs");

const parseInput = function(userInput) {
  let parsedInput = { bytes: undefined, lines: 10, fileNames: [] };
  parsedInput.fileNames = parsedInput.fileNames.concat(userInput);
  return parsedInput;
};

const getContents = function(fileName) {
  return fs.readFileSync(fileName, "utf-8");
};

module.exports = { parseInput, getContents };
