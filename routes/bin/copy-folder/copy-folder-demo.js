const copyFolderSyncs = require("./index");

const outputs = [
  {
    sourceFolder: process.env.HOME + "/a",
    targetFolder: process.env.HOME + "/b",
    exclude: [".gitignore"],
  },
];

copyFolderSyncs(outputs);
