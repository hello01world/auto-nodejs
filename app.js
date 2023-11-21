const Koa = require("koa");
const app = new Koa();
const static = require("koa-static");
const views = require("koa-views");
const bodyparser = require("koa-bodyparser");
const router = require("./routes");

// 定时器，本地使用
require("./schedule/auto-nodejs");

// post
app.use(bodyparser({}));

// 静态资源
app.use(static(__dirname + "/public"));

// 模板
app.use(views(__dirname + "/views", { extension: "ejs" }));

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(router.routes());
router.get("/", (ctx) => {
  // 构建重定向 URL，根据协议选择不同的方案（http 或 https）
  const redirectToURL = `${ctx.protocol}://${ctx.host}/auto-nodejs.html`;
  // 使用 ctx.redirect() 方法进行路由重定向
  ctx.redirect(redirectToURL);
});

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
