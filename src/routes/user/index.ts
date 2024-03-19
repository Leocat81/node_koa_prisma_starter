import Router from "@koa/router";
import { PrismaClient } from "@prisma/client";

const userRouter = new Router({ prefix: "/user" });
const prisma = new PrismaClient({
  log: ["info"],
});

/* 请求所有资源 */
userRouter.get("/", async (ctx) => {
  const allUsers = await prisma.user.findMany();
  ctx.body = allUsers;
});

/* 新增资源 */
userRouter.post("/", async (ctx) => {
  const { name } = ctx.request.body;
  const res = await prisma.user.create({
    data: {
      name,
    },
  });
  ctx.body = res;
});

/* 删除特定资源 */

userRouter.delete('/',async (ctx)=>{
  
})

export default userRouter;
