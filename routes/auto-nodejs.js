const router = require("koa-router")();
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const logFile = path.join(__dirname, "../", "/logs/auto-nodejs.log");

router.prefix("/api");

router.get("/auto-nodejs/auto-nodejs.json", (ctx, next) => {
  let data = require("./data/auto-nodejs.json");
  ctx.body = {
    status: 200,
    code: "success",
    data,
  };
});

router.get("/auto-nodejs/*", (ctx, next) => {
  let urlPath = ctx.url.replace("/api/auto-nodejs", "");
  let scriptPath = path.join(__dirname, `./bin${urlPath}.js`);
  try {
    const output = execSync(`node ${scriptPath}`, {
      stdio: ["inherit", "pipe", "inherit"],
    });
    const stdout = output.toString();
    ctx.body = {
      status: 200,
      code: "success",
      msg: `node ${urlPath},js`,
      stdout: stdout,
    };

    let log = fs.readFileSync(logFile, "utf8");
    log = `${new Date(
      Date.now()
    )}</br>${urlPath}</br>${stdout}</br>${log}</br>`;
    fs.writeFileSync(logFile, log, "utf8");
  } catch (error) {
    ctx.body = {
      status: 100,
      code: "fail",
      msg: `node ${urlPath},js`,
      stdout: error,
    };

    let log = fs.readFileSync(logFile, "utf8");
    log = `${new Date(Date.now())}</br>${urlPath}</br>${error}</br>${log}</br>`;
    fs.writeFileSync(logFile, log, "utf8");
  }
});

module.exports = router;
