const { deepEqual } = require("assert");
const { parseInput, getContents ,getUpperPart } = require("../src/library.js");

describe("parseInput", function() {
  describe("Passing only the file names", function() {
    it("should return  an object with bytes as undefined lines as 10 and fileNames as an empty array when we dont give filename", function() {
      deepEqual(parseInput([""]), {
        bytes: undefined,
        lines: 10,
        fileNames: [""]
      });
    });

    it("Should return an object containing bytes as undefined lines as 10 and fileNames as the given file name in an array when given a file", function() {
      deepEqual(parseInput(["example1.js"]), {
        bytes: undefined,
        lines: 10,
        fileNames: ["example1.js"]
      });
    });

    it("Should return an object containing bytes as undefined lines as 10 and fileNames as the given file names in an array when given more than file", function() {
      deepEqual(parseInput(["example1.js", "example2.js"]), {
        bytes: undefined,
        lines: 10,
        fileNames: ["example1.js", "example2.js"]
      });
    });
  });
});

describe('getUpperPart', function() {
    it('should return an array with empty string when given an empty string ', function() {
        deepEqual(getUpperPart('',1),['']);
    });

    it('should return an empty array when given line number as 0', function() {
        deepEqual(getUpperPart('a\n ',0),[]);
    });

    it('should return an array with the 1 line when given one lined content', function() {
        deepEqual(getUpperPart('a\n ',1),['a']);
    });
    
});