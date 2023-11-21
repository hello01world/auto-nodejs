const chromeBookmarks = require("./index");
const path = require("path");

chromeBookmarks(
  `${process.env.HOME}/Library/Application Support/Google/Chrome/Default/Bookmarks`,
  path.join(__dirname, "../../data") + "/chrome-bookmarks.json"
);
