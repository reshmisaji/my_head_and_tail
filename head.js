const {parseInput,getContents} = require('./src/library.js');
const fs = require('fs');

const main = function(parameters) {
  let input = parseInput(parameters);
  let contents = getContents(fs,input.fileNames[0],input.lines);
  console.log(contents);
}

main(process.argv.slice(2));

