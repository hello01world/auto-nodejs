const router = require("koa-router")();
const fs = require("fs");
const path = require("path");
const logPath = path.join(__dirname, "../") + "logs";

router.prefix("/api");

router.get("/logs/list", async (ctx, next) => {
  let rows = await readdir(logPath);
  await ctx.render("logs/list", {
    rows,
  });
});

router.get("/logs/:logs", async (ctx, next) => {
  let params = ctx.params;
  let data = "";
  if (params.logs.indexOf(".log") > -1) {
    console.log(logPath + "/" + params.logs, 11);
    data = fs.readFileSync(logPath + "/" + params.logs, "utf-8");
  }
  await ctx.render("logs/detail", {
    title: params.logs,
    data: data.replace(/\r?\n/g, "<br>"),
  });
});

function readdir(src) {
  let arr = [];
  return new Promise((resolve, reject) => {
    fs.readdir(src, function (err, paths) {
      if (err) {
        throw err;
      }
      paths.forEach(function (path) {
        arr.push(path);
      });
      resolve(arr);
    });
  });
}

module.exports = router;
