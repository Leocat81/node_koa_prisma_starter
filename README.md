# node typescript prisma 项目模版

> [https://koajs.com](https://koajs.com)

> 接口文档地址 [https://t6y34ryrf5.apifox.cn](https://t6y34ryrf5.apifox.cn)

- 使用 Typescript 來搭建 Koa 項目 [https://mattxlee.medium.com/%E4%BD%BF%E7%94%A8typescript%E4%BE%86%E6%90%AD%E5%BB%BAkoa%E9%A0%85%E7%9B%AE-3e6403735628](https://mattxlee.medium.com/%E4%BD%BF%E7%94%A8typescript%E4%BE%86%E6%90%AD%E5%BB%BAkoa%E9%A0%85%E7%9B%AE-3e6403735628)

- vscode 调试 TypeScript [https://code.visualstudio.com/docs/typescript/typescript-debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)

  两个要点： tsconfig.json `sourceMap = true` , launch.json `preLaunchTask` 属性

- koa-router 路由设计，采用模块化分离路由 [https://github.com/koajs/router/blob/HEAD/API.md#nested-routers](https://github.com/koajs/router/blob/HEAD/API.md#nested-routers)

- prisma vscode 调试，打印 prisma 执行日志, 需要`launch.json` [https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/debugging](https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/debugging)

[https://code.visualstudio.com/Docs/editor/debugging#\_launchjson-attributes](https://code.visualstudio.com/Docs/editor/debugging#_launchjson-attributes)

- 利用`@koa/bodyparser`解析请求报文

## prisma

- Prisma CLI

> [https://www.prisma.io/docs/orm/tools/prisma-cli](https://www.prisma.io/docs/orm/tools/prisma-cli)

- mongodb 副本集搭建

> mongodb 数据库使用事务来支持嵌套写入，所以 prisma 需要一个部署了副本集的 mongodb 服务

[https://github.com/prisma/prisma/issues/8266](https://github.com/prisma/prisma/issues/8266) [https://github.com/prisma/docs/issues/2795](https://github.com/prisma/docs/issues/2795)

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

1. 执行 `docker-compose up -d` 启动一个本地 mongodb 服务用于开发环境

2. 执行 `docker-compose exec mongo mongo --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]});" 或docker-compose exec mongo mongosh --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]});"`

3. DATABASE_URL="mongodb://localhost:27017/zzbdiscar?directConnection=true"

## Prisma Studio

> [Prisma ORM 带有内置 GUI，可查看和编辑数据库中的数据](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#studio)

```sh
npx prisma studio
```

## prisma REST API

- [https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-koa/README.md](https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-koa/README.md)

- @koa/router 库中关于 REST API 的使用参考 [https://github.com/koajs/router/blob/master/API.md](https://github.com/koajs/router/blob/master/API.md)

## TODO

- 完成权限集成(JWT 或其他形式)
- 测试
