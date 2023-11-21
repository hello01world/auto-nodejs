const router = require("koa-router")();
const routes_logs = require("./logs");
const routes_auto_nodejs = require("./auto-nodejs");

const routes = {
  routes_logs,
  routes_auto_nodejs,
};

for (const k in routes) {
  const route = routes[k];
  router.use(route.routes(), route.allowedMethods());
}

module.exports = router;
