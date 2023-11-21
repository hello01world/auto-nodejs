const readFolders = require("./index");
const path = require("path");

let outputs = [
  {
    directoryPath: path.join(__dirname, "../../../../auto-nodejs"),
    maxLevel: 1,
    onlyFolders: false,
    excludeItems: ["index.js", ".DS_Store", "node_modules", ".git"],
    genPath: path.join(__dirname, "../../data"),
    genFile: "read-folder-demon.json",
  },
];

readFolders(outputs);
