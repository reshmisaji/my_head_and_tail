const parseInput = function(userInput){
    let parsedInput = {type : 'n', lines : 10, fileNames : []};
    parsedInput.fileNames = parsedInput.fileNames.concat(userInput);
    return parsedInput;
}

module.exports = {parseInput};
