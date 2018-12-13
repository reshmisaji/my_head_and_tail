const { deepEqual } = require("assert");
const { parseInput } = require("../src/library.js");

describe("parseInput", function() {
  describe("Passing only the file names", function() {
    it('Should return an object containing type as "n" lines as 10 and fileNames as the given file name in an array when given a file', function() {
      deepEqual(parseInput(["example1.js"]), {
        type: "n",
        lines: 10,
        fileNames: ["example1.js"]
      });
    });
    it('Should return an object containing type as "n" lines as 10 and fileNames as the given file names in an array when given more than file', function() {
      deepEqual(parseInput(["example1.js", "example2.js"]), {
        type: "n",
        lines: 10,
        fileNames: ["example1.js", "example2.js"]
      });
    });
  });
});
