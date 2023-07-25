const fs = require("fs");
const files = ["./loop.js", "./file-with-error.js", "./try.js"];

files.forEach((file) => {
  try {
    const data = fs.readFileSync(file);
    console.log("File data is", data);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File not found");
    } else {
      throw error;
    }
  }
});
