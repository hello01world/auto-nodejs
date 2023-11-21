const runScripts = require("./index");
const path = require("path");

const files = [
  path.join(__dirname, "../", "/close-volume/close-volume.js"),
  path.join(__dirname, "../", "/chrome-bookmarks/chrome-bookmarks.js"),
  path.join(__dirname, "../", "/read-folder/read-folder-bin.js"),
  // path.join(__dirname, "../", "/read-folder/read-folder-demo.js"),
  // path.join(__dirname, "../", "/copy-folder/copy-folder-demo.js"),
  // path.join(__dirname, "../", "/deploy/deploy-demo.js"),
  // path.join(__dirname, "../", "/gitupdate/gitupdate-demo.js"),
];

runScripts(files);
