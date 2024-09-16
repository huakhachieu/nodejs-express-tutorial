const path = require("path");
console.log(path.sep);

const filePath = path.join("content/", "/subfolder");
console.log(filePath);
const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname, "..");
console.log(absolutePath);
