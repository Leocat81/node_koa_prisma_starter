import Router from '@koa/router';
import { PrismaClient } from '@prisma/client'

const userRouter = new Router({ prefix: '/user' });
const prisma = new PrismaClient({
   log: ['info'],
})

userRouter.get('/', async (ctx) => {
  const allUsers = await prisma.user.findMany();
  ctx.body = allUsers;
})

export default userRouter;