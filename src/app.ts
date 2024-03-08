import Koa from "koa";
import route from './routes/index';
import { PrismaClient } from "@prisma/client";

const koa = new Koa();
const prisma = new PrismaClient();


async function main() {
  const allUsers = await prisma.user.findMany();
  await prisma.$disconnect();
  console.log(allUsers);
  return allUsers;
}

koa.use(route.routes());
koa.listen(3003, () => {
  console.log("server is running at http://localhost:3003");
});
