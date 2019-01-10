const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const controller = require("./controller");
const cors = require("koa2-cors");
const koaBody = require("koa-body");

// error handler
onerror(app);

// middlewares
app.use(cors());
app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 20000 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
  })
);
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "ejs"
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// controller
app.use(controller());

app.listen(2333);

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
