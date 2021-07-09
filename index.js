const { Console } = require("console");
const fs = require("fs");
const testFolder = "./content";

fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    if (!file) {
      Console.log("No files");
    } else console.log(file);
  });
});
