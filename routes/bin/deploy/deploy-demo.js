const runScripts = require("./index");

const scriptPaths = [
  {
    scriptPath: process.env.HOME + "/deploy.sh",
  },
];

runScripts(scriptPaths);
