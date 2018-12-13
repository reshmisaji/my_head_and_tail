const { deepEqual } = require("assert");
const { parseInput } = require("../src/library.js");

describe("parseInput", function() {
  describe("Passing only the file names", function() {
    it('Should return an object containing bytes as undefined lines as 10 and fileNames as the given file name in an array when given a file', function() {
      deepEqual(parseInput(["example1.js"]), {
        bytes: undefined,
        lines: 10,
        fileNames: ["example1.js"]
      });
    });
    it('Should return an object containing bytes as undefined lines as 10 and fileNames as the given file names in an array when given more than file', function() {
      deepEqual(parseInput(["example1.js", "example2.js"]), {
        bytes: undefined,
        lines: 10,
        fileNames: ["example1.js", "example2.js"]
      });
    });
  });
});
