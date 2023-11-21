const readFolders = require("./index");
const path = require("path");

let outputs = [
  {
    directoryPath: path.join(__dirname, "../../bin"),
    maxLevel: 1,
    onlyFolders: false,
    excludeItems: ["index.js", ".DS_Store"],
    genPath: path.join(__dirname, "../../data"),
    genFile: "auto-nodejs.json",
  },
];

readFolders(outputs);
