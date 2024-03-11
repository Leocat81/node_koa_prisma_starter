import Router from "@koa/router";
import { Prisma, PrismaClient } from "@prisma/client";

const userRouter = new Router({ prefix: "/user" });
const prisma = new PrismaClient({
  log: ["info"],
});

userRouter.get("/", async (ctx) => {
  const allUsers = await prisma.user.findMany();
  ctx.body = allUsers;
});

userRouter.post("/", async (ctx) => {
  const body = ctx.request.body as any;
  try {
  await prisma.user.create({
    data:body,
  });
  } catch (error) {
    console.log(error);
  }

  ctx.body = "asdsd";
});

export default userRouter;
