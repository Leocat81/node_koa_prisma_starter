import Koa from "koa";
import route from "./routes/index";
import bodyParser from "@koa/bodyparser";

const koa = new Koa();

koa.use(
  bodyParser({
    enableTypes: ["text", "json", "form", "xml"],
    encoding: "utf-8",
  })
);
koa.use(route.routes());
koa.listen(3003, () => {
  console.log("server is running at http://localhost:3003");
});
