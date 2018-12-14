const { deepEqual } = require("assert");
const { parseInput, getContents } = require("../src/library.js");

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

describe("getContents", function() {
  it("should return the contents of the given file path in a string if the file exists", function() {
      deepEqual(getContents('./appData/sample.js'),'1\n')
  });

  it('should return "File not found" when we give a file path which does not exist', function() {
      deepEqual(getContents('./sample.js'),'File not found')
  });
});
