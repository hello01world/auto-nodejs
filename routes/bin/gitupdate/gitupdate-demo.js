const runScripts = require("./index");

const scriptPaths = [
  {
    scriptPath: process.env.HOME + "/gitupdate.sh",
  },
];

runScripts(scriptPaths);
