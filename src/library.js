const parseInput = function(userInput){
    let parsedInput = {bytes : undefined, lines : 10, fileNames : []};
    parsedInput.fileNames = parsedInput.fileNames.concat(userInput);
    return parsedInput;
}

module.exports = {parseInput};
