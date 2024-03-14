# node typescript prisma 项目模版
* 使用 Typescript 來搭建 Koa 項目 [https://mattxlee.medium.com/%E4%BD%BF%E7%94%A8typescript%E4%BE%86%E6%90%AD%E5%BB%BAkoa%E9%A0%85%E7%9B%AE-3e6403735628](https://mattxlee.medium.com/%E4%BD%BF%E7%94%A8typescript%E4%BE%86%E6%90%AD%E5%BB%BAkoa%E9%A0%85%E7%9B%AE-3e6403735628)

* vscode 调试 TypeScript [https://code.visualstudio.com/docs/typescript/typescript-debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)

  两个要点： tsconfig.json `sourceMap = true` , launch.json `preLaunchTask` 属性

* koa-router 路由设计，采用模块化分离路由 [https://github.com/koajs/router/blob/HEAD/API.md#nested-routers](https://github.com/koajs/router/blob/HEAD/API.md#nested-routers)

* prisma vscode 调试，打印prisma执行日志, 需要`launch.json`
[https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/debugging](https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/debugging)

[https://code.visualstudio.com/Docs/editor/debugging#_launchjson-attributes](https://code.visualstudio.com/Docs/editor/debugging#_launchjson-attributes)

* 利用`@koa/bodyparser`解析请求报文

## prisma

* Prisma CLI

> [https://www.prisma.io/docs/orm/tools/prisma-cli](https://www.prisma.io/docs/orm/tools/prisma-cli)

* mongodb副本集搭建

[https://github.com/prisma/prisma/issues/8266](https://github.com/prisma/prisma/issues/8266)
[https://github.com/prisma/docs/issues/2795](https://github.com/prisma/docs/issues/2795)

```yml
version: "3"

services:
  mongo:
    container_name: mongo
    image: mongo
    command: --replSet rs0
    ports:
      - "27017:27017"
      - "28017:28017"
    volumes:
      - /Users/sijunfeng/data/docker/mongodata:/data/db

```

> DATABASE_URL="mongodb://localhost:27017/zzbdiscar?directConnection=true"
