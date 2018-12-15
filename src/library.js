const fs = require("fs");

const parseInput = function(userInput) {
  let parsedInput = { bytes: undefined, lines: 10, fileNames: [] };
  parsedInput.fileNames = parsedInput.fileNames.concat(userInput);
  return parsedInput;
};

const getContents = function(fileName) {
  if (fs.existsSync(fileName)) {
    return fs.readFileSync(fileName, "utf-8");
  }
  return 'File not found'
};

const getUpperPart = function(contents,numberOfLines) {
    let data = contents.trim();
    data = data.split("\n").slice(0,numberOfLines);
    return data;
}

module.exports = { parseInput, getContents,getUpperPart };
