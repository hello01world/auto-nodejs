/**
 * 执行js
 */
const { execSync } = require("child_process");
const path = require("path");

function runScript(scriptPath) {
  execSync(`node ${scriptPath}`, { stdio: "inherit" });
}

function runScripts(files) {
  try {
    files.forEach((file) => {
      console.log(`${file.replace(path.join(__dirname, "../"), "")}`);
      runScript(file);
    });
    console.log("multi success");
  } catch (error) {
    console.log("multi fail:" + error);
  }
}

module.exports = runScripts;
