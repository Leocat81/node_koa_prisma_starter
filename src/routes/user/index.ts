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

userRouter.put("/:id", async (ctx) => {
  const id = ctx.params.id;
  const { name } = ctx.request.body;
  const post = await prisma.user.update({
    where: { id },
    data: {
      name,
    },
  });
  ctx.body = post;
});

/* 删除特定资源 */
userRouter.del("/:id", async (ctx) => {
  const id = ctx.params.id;
  try {
    const deletedPost = await prisma.user.delete({
      where: { id },
    });
    ctx.body = deletedPost;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: `Post with ID ${id} does not exist in the database` };
  }
});

export default userRouter;
