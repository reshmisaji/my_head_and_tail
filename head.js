const { parseInput, getContents } = require("./src/library.js");
const fs = require("fs");

const main = function(parameters) {
  let input = parseInput(parameters);
  let contents = [];

  for (let index = 0; index < parameters.length; index++) {
    contents.push(getContents(fs, input.fileNames[index], input.lines));
  }
  contents.map(x=>console.log(x));
};

main(process.argv.slice(2));
